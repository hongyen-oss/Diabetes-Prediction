# Đề xuất đề tài BTL - Trí tuệ nhân tạo
## 1. Thông tin nhóm
- Nhóm: 11
- Thành viên:
- Nguyễn Thị Ngọc Ngoan - 2351050114
- Nguyễn Lê Duy Vương - 2351050206
- Nguyễn Huỳnh Như Ý - 2351050211
- Võ Hồng Yến - 2351010257
- GVHD: VÕ VIỆT KHOA
## 2. Đề tài chọn
- **Đề tài số:** 10
- **Tên:** Diabetes Prediction
- **Loại bài toán:** Classification
- **Dataset:** Kaggle-Pima Indians Diabetes
-  Link: https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database 
## 3. Mục tiêu
- Xây dựng mô hình phân loại có/không mắc bệnh tiểu đường dựa trên các chỉ số lâm sàng (Glucose, BMI, Blood Pressure, Age, …).
- Xử lý dữ liệu thiếu (các giá trị 0 bất thường trong dataset Pima).
- Phát hiện và xử lý outlier để tăng độ chính xác mô hình.
- Tối ưu Recall nhằm giảm thiểu False Negative (tránh bỏ sót bệnh nhân mắc bệnh).
## 4. Công nghệ dự kiến
- ML:
Ngôn ngữ: Python.
Thư viện: Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn.
Thuật toán dự kiến: Logistic Regression, Decision Tree, Random Forest, KNN
- Frontend: Streamlit (xây dựng giao diện web đơn giản để nhập chỉ số và dự đoán)
- Backend:
Python (Flask/FastAPI nếu tách API).
Xử lý và load model bằng Pickle/Joblib
- **DB:** SQLite
## 5. Phân công công việc
- Thành viên 1 (Project Manager): 
Lập kế hoạch, quản lý tiến độ.
Phân công công việc, theo dõi timeline.
Tổng hợp báo cáo, slide, weekly report.
- Thành viên 2 (ML / Data Scientist):
EDA, xử lý missing & outlier.
Feature engineering.
Xây dựng ≥ 3 mô hình, tuning.
Đánh giá (ưu tiên Recall), lưu model.
- Thành viên 3 (Backend – API):
Xây dựng API (Flask/FastAPI).
Load model, tạo endpoint predict.
Test API.
- Thành viên 4 (Frontend + QA):
Thiết kế giao diện nhập chỉ số.
Tích hợp API, hiển thị kết quả.
Kiểm thử hệ thống, demo, chụp hình.
Hoàn thiện báo cáo cuối kỳ.
## 6. Timeline
- Tuần 1: Đề xuất đề tài
- Tuần 2 + 3: Notebook EDA, Preprocessing, Modeling
- Tuần 4 + 5 + 6: Model + Persistence, wandb
- Tuần 7:   FE + BE, Demo, Báo cáo 
- Tuần 8: Nộp bài + Bảo vệ
