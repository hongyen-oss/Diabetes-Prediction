import os
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette import status
from sqlalchemy.orm import Session
import pandas as pd
import joblib

from database import engine, get_db, Base
import db_models, schemas

# Tạo bảng trong database tự động
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Diabetes Prediction API")

# Cấu hình CORS cho ReactJS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Đường dẫn tới file model
MODEL_PATH = os.path.join(os.path.dirname(__file__), "../models/model_package.joblib")

# Khởi tạo biến
ai_pipeline = None
model_metadata = {
    "model_name": "RandomForest Classifier (Pipeline)",
    "version": "1.0",
    "metrics": {"Accuracy": 0.85, "Recall": 0.90},
    "features": [
        "Pregnancies", "Glucose", "BloodPressure", "SkinThickness", "Insulin",
        "BMI", "DiabetesPedigreeFunction", "Age",
        "Age_Group", "BMI_Category", "Glucose_BMI_Ratio"
    ]
}


try:
    if os.path.exists(MODEL_PATH):
        saved_package = joblib.load(MODEL_PATH)
        # Kiểm tra xem file joblib lưu dạng Dictionary hay Model trực tiếp
        if isinstance(saved_package, dict) and 'pipeline' in saved_package:
            ai_pipeline = saved_package['pipeline']
            model_metadata.update(saved_package.get('metadata', {}))
        else:
            ai_pipeline = saved_package
        print("Đã load Model AI thành công!")
    else:
        print(f"Không tìm thấy file model tại: {MODEL_PATH}")
except Exception as ex:
    print(f"Lỗi khi load model: {ex}")


@app.get("/model-info", response_model=schemas.ModelInfoResponse)
def get_model_info():
    if ai_pipeline is None:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Model chưa được load.")
    return model_metadata


@app.post("/predict", response_model=schemas.PredictionResponse)
def predict_diabetes(features: schemas.PatientFeature, db: Session = Depends(get_db)):
    if ai_pipeline is None:
        raise HTTPException(status_code=500, detail="Model is currently unavailable")

    try:
        raw_data = features.model_dump()

        bmi_val = raw_data["bmi"] if raw_data["bmi"] > 0 else 1
        glucose_bmi_ratio = raw_data["glucose"] / bmi_val

        bmi_category = 0
        if bmi_val < 18.5:
            bmi_category = 0  # Underweight
        elif 18.5 <= bmi_val < 25:
            bmi_category = 1  # Normal
        elif 25 <= bmi_val < 30:
            bmi_category = 2  # Overweight
        else:
            bmi_category = 3  # Obese

        # 3. Tạo cột Age_Group (Giả định chia nhóm tuổi)
        age = raw_data["age"]
        age_group = 0
        if age < 30:
            age_group = 0
        elif 30 <= age < 45:
            age_group = 1
        elif 45 <= age < 60:
            age_group = 2
        else:
            age_group = 3

        # ==========================================
        # MAP DỮ LIỆU CŨ + 3 CỘT MỚI ĐỂ ĐƯA VÀO MODEL
        # ==========================================
        model_input_dict = {
            "Pregnancies": raw_data["pregnancies"],
            "Glucose": raw_data["glucose"],
            "BloodPressure": raw_data["blood_pressure"],
            "SkinThickness": raw_data["skin_thickness"],
            "Insulin": raw_data["insulin"],
            "BMI": raw_data["bmi"],
            "DiabetesPedigreeFunction": raw_data["dpf"],
            "Age": raw_data["age"],
            "Age_Group": age_group,  # Cột mới 1
            "BMI_Category": bmi_category,  # Cột mới 2
            "Glucose_BMI_Ratio": glucose_bmi_ratio  # Cột mới 3
        }

        # 3. Chuyển thành DataFrame để đưa vào model
        input_data = pd.DataFrame([model_input_dict])

        if hasattr(ai_pipeline, "feature_names_in_"):
            expected_order = ai_pipeline.feature_names_in_
            input_data = input_data[expected_order]

        # 4. Chạy mô hình dự đoán
        pred_result = int(ai_pipeline.predict(input_data)[0])

        # 5. Lưu vào Database bằng ORM
        db_record = db_models.PredictionHistory(
            pregnancies=raw_data["pregnancies"],
            glucose=raw_data["glucose"],
            blood_pressure=raw_data["blood_pressure"],
            skin_thickness=raw_data["skin_thickness"],
            insulin=raw_data["insulin"],
            bmi=raw_data["bmi"],
            dpf=raw_data["dpf"],
            age=raw_data["age"],
            prediction=pred_result
        )
        db.add(db_record)
        db.commit()
        db.refresh(db_record)

        # 6. Xử lý câu trả lời
        msg = "Nguy cơ mắc tiểu đường cao, cần đi khám." if pred_result == 1 else "Không có dấu hiệu tiểu đường."

        return {
            "prediction": pred_result,
            "message": msg,
            "status": "success"
        }

    except Exception as ex:
        # Nếu model vẫn báo lỗi, nó sẽ in rõ ra đây để mình biết
        raise HTTPException(status_code=400, detail=f"Lỗi trong quá trình dự đoán: {str(ex)}")


@app.get("/history")
def get_prediction_history(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    records = db.query(db_models.PredictionHistory).order_by(db_models.PredictionHistory.created_date.asc()).offset(
        skip).limit(limit).all()
    return records
