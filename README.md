# Diabetes-Prediction
- **Loại bài toán:** Classification
- **Dataset:** Kaggle-Pima Indians Diabetes
- **Link:** https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database
  
<img width="800" height="450" alt="image" src="https://github.com/user-attachments/assets/1a69318b-bacf-439d-8b66-ed7d48c37984" />

# 1. Giới thiệu
## ***Mô tả bài toán và Bối cảnh thực tế:***
- Trong bối cảnh hiện nay, các bệnh mãn tính như ***tiểu đường (diabetes)*** đang gia tăng nhanh chóng và trở thành một trong những vấn đề y tế toàn cầu. Việc phát hiện sớm nguy cơ mắc bệnh đóng vai trò quan trọng trong việc điều trị và giảm thiểu biến chứng.
***Bài toán đặt ra là:***
- Xây dựng một mô hình Machine Learning nhằm dự đoán khả năng mắc bệnh tiểu đường dựa trên các chỉ số sinh học (Glucose, BMI, Blood Pressure, Insulin, SkhinThickness) và Thông tin tiền sử ( Age, Pregnancies).
- ComeOut: Có mắc bệnh (1) hoặc không (0)
- Bài toán này thuộc dạng classification (phân loại nhị phân)
***Ứng dụng thực tế:***
- Hỗ trợ bác sĩ trong chẩn đoán ban đầu
- Giảm chi phí xét nghiệm chuyên sâu
- Triển khai trong hệ thống web app
## ***Mục tiêu cụ thể***


## ***Giải  lựa chọn***
<br>***Một số mô hình nhóm chúng em lựa chọn:***
- ***Random Forest:*** (lựa chọn phù hợp nhất)
<br> Xử lý tốt dữ liệu phi tuyến
<br> Giảm overfitting nhờ ensemble
- ***Logistic Regression***
<br> Dễ hiểu, baseline tốt
<br> Phù hợp bài toán nhị phân
- Để đánh giá hiệu suất, chúng em sử dụng Recall và F1-score, vì trong bài toán y tế, việc giảm thiểu bỏ sót bệnh nhân quan trọng hơn độ chính xác tổng thể.
# 2. Phương pháp:
## ***2.1. Mô tả dataset***
- Dataset sử dụng là Pima Indians Diabetes Dataset nhằm cung cấp thông tin liên quan đến bệnh tiểu đường.
- Bao gồm:
<br> Số mẫu: 768
<br> Số features: 8 ( Glucose, BloodPressure, BMI, Insulin, Age, Pregnancies, SkinThickness, DiabetesPedigreeFunction)
<br> Biến mục tiêu: Outcome (0/1)
- Đặc điểm raw dataset:
<br> Có giá trị thiếu (được biểu diễn bằng 0)
<br> Một số feature có phân phối lệch
### ***2 Mô tả Features***
- **Pregnancies:** Số lần mang thai của bệnh nhân.
- **Glucose:** Nồng độ đường trong huyết tương sau 2 giờ thực hiện nghiệm pháp dung nạp glucose đường uống (OGTT).
- **BloodPressure:** Huyết áp tâm trương (mm Hg).
- **SkinThickness:** Độ dày nếp gấp da vùng cơ tam đầu (mm) - dùng để đánh giá lượng mỡ dưới da.
- **Insulin:** Nồng độ insulin trong huyết thanh sau 2 giờ (mu U/ml).
- **BMI:** Chỉ số khối cơ thể (trọng lượng tính bằng kg / (chiều cao tính bằng m)²).
- **DiabetesPedigreeFunction:** Chỉ số phả hệ bệnh tiểu đường (đánh giá nguy cơ di truyền dựa trên lịch sử gia đình).
- **Age:** Tuổi của bệnh nhân (tính theo năm).
- **Outcome (Biến mục tiêu):** Biến phân loại (0: Không mắc bệnh, 1: Mắc bệnh).
## ***2.2. Các bước preprocessing***
## ***2.3. Models đã xử dụng***
## ***2.4. Tài liệu tham khảo***
# Kết quả
