# Diabetes-Prediction
- **Loại bài toán:** Classification
- **Dataset:** Kaggle-Pima Indians Diabetes
- **Link:** https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database
  
<img width="800" height="450" alt="image" src="https://github.com/user-attachments/assets/1a69318b-bacf-439d-8b66-ed7d48c37984" />

# 1. Giới thiệu
## ***Mô tả bài toán và Bối cảnh thực tế:***
- Trong bối cảnh hiện nay, các bệnh mãn tính như ***tiểu đường (diabetes)*** đang gia tăng nhanh chóng và trở thành một trong những vấn đề y tế toàn cầu. Việc phát hiện sớm nguy cơ mắc bệnh đóng vai trò quan trọng trong việc điều trị và giảm thiểu biến chứng.
***Bài toán đặt ra là:***
- Xây dựng một mô hình Machine Learning nhằm dự đoán khả năng mắc bệnh tiểu đường dựa trên các chỉ số sinh học của bệnh nhân như Glucose, BMI, Blood Pressure, Insulin,...
- Bài toán này thuộc dạng classification (phân loại nhị phân):
+ Output: Có mắc bệnh (1) hoặc không (0)

***Ứng dụng thực tế:***
- Hỗ trợ bác sĩ trong chẩn đoán ban đầu
- Giảm chi phí xét nghiệm chuyên sâu
- Triển khai trong hệ thống web app
## ***Mục tiêu cụ thể***


# ***Lý do lựa chọn***

# 2. Phương pháp:
## ***Mô tả dataset***
Bộ dữ liệu nhằm cung cấp thông tin liên quan đến bệnh tiểu đường. Bao gồm ***768 mẫu*** với ***8 biến độc lập (các chỉ số lâm sàng)*** và ***1 biến mục tiêu (Outcome)***. Mục tiêu là phân loại biến mục tiêu thành " Không bệnh" và " Có bệnh" bằng cách sử dụng các thuật toán máy học khác nhau và tìm ra thuật toán phù hợp nhất với bộ dữ liệu.
# Attributes
- **Pregnancies:** Số lần mang thai của bệnh nhân.
- **Glucose:** Nồng độ đường trong huyết tương sau 2 giờ thực hiện nghiệm pháp dung nạp glucose đường uống (OGTT).
- **BloodPressure:** Huyết áp tâm trương (mm Hg).
- **SkinThickness:** Độ dày nếp gấp da vùng cơ tam đầu (mm) - dùng để đánh giá lượng mỡ dưới da.
- **Insulin:** Nồng độ insulin trong huyết thanh sau 2 giờ (mu U/ml).
- **BMI:** Chỉ số khối cơ thể (trọng lượng tính bằng kg / (chiều cao tính bằng m)²).
- **DiabetesPedigreeFunction:** Chỉ số phả hệ bệnh tiểu đường (đánh giá nguy cơ di truyền dựa trên lịch sử gia đình).
- **Age:** Tuổi của bệnh nhân (tính theo năm).
- **Outcome (Biến mục tiêu):** Biến phân loại (0: Không mắc bệnh, 1: Mắc bệnh).
