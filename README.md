# Diabetes-Prediction
- **Loại bài toán:** Classification
- **Dataset:** Kaggle-Pima Indians Diabetes
- **Link:** https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database
-  
<img width="800" height="450" alt="image" src="https://github.com/user-attachments/assets/1a69318b-bacf-439d-8b66-ed7d48c37984" />

# Tổng quan về project
Dự đoán bệnh tiểu đường là một thành phần thiết yếu trong y học dự phòng, tập trung vào việc phân tích các chỉ số sinh học và dữ liệu lâm sàng để đánh giá nguy cơ mắc bệnh của một cá nhân. Quy trình này tích hợp các thông tin nhân khẩu học như độ tuổi, giới tính cùng với các chỉ số sức khỏe quan trọng bao gồm chỉ số khối cơ thể (BMI), nồng độ glucose trong máu và huyết áp.

Bằng cách kiểm tra các dấu hiệu sinh học kết hợp với lịch sử y tế gia đình và các thói quen lối sống, các mô hình dự báo có thể nhận diện sớm các mô hình và xu hướng chỉ ra khả năng tiến triển thành bệnh tiểu đường. Trong quá trình này, các thuật toán học máy (Machine Learning) đóng vai trò then chốt trong việc xử lý dữ liệu phức tạp, giúp phân loại các cá nhân vào các nhóm rủi ro khác nhau.

Mục tiêu cuối cùng là hỗ trợ can thiệp kịp thời và xây dựng các chiến lược phòng ngừa cá nhân hóa, giúp người bệnh điều chỉnh lối sống nhằm giảm thiểu các biến chứng nguy hiểm liên quan đến tiểu đường. Việc liên tục giám sát và cập nhật mô hình đảm bảo tính chính xác và hiệu quả trong việc hỗ trợ quản lý sức khỏe chủ động.
# Tổng quan về Dataset
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
