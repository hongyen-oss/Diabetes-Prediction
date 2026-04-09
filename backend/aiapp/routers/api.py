from flask import Blueprint, request, jsonify
from aiapp.models import Users, DiabetesPredict
from aiapp.extension import db
from aiapp.services.ml_loader import model

api_bp = Blueprint('api', __name__, url_prefix='/api')


@api_bp.route('/')
def home():
    return {"message": "Diabetes API running"}


@api_bp.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        required_fields = ['name', 'sdt', 'glucose', 'bmi']
        for f in required_fields:
            if f not in data:
                return jsonify({"error": f"Missing {f}"}), 400

        features = [
            int(data.get('pregnancies', 0)),
            float(data.get('glucose', 0)),
            float(data.get('bloodPressure', 0)),
            float(data.get('skinThickness', 0)),
            float(data.get('insulin', 0)),
            float(data.get('bmi', 0)),
            float(data.get('dpf', 0)),
            int(data.get('age', 0))
        ]

        prediction = model.predict([features])[0]
        proba = model.predict_proba([features])[0][1]

        # USER
        user = Users.query.filter_by(Phone_Number=data['sdt']).first()
        if not user:
            user = Users(
                Phone_Number=data['sdt'],
                Name=data['name']
            )
            db.session.add(user)
            db.session.commit()

        # SAVE
        pred = DiabetesPredict(
            Pregnancies=features[0],
            Glucose=features[1],
            BloodPressure=features[2],
            SkinThickness=features[3],
            Insulin=features[4],
            BMI=features[5],
            DiabetesPedigreeFunction=features[6],
            Age=features[7],
            Outcome=int(prediction),
            Prediction_proba=float(proba),
            User_ID=user.User_ID
        )

        db.session.add(pred)
        db.session.commit()

        return jsonify({
            "outcome": int(prediction),
            "probability": float(proba),
            "user_id": user.User_ID
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@api_bp.route('/history')
def history():
    preds = DiabetesPredict.query.order_by(DiabetesPredict.Created_at.desc()).limit(10).all()

    result = []
    for p in preds:
        result.append({
            "user": p.user.Name,
            "glucose": p.Glucose,
            "bmi": p.BMI,
            "result": p.Outcome
        })

    return jsonify(result)