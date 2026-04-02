import React, { useState } from 'react';

const InputScreen = ({ onPredict }) => {
  // State lưu trữ toàn bộ các trường theo cấu trúc TABLE diabetes_predict
  const [data, setData] = useState({
    name: '',       // Sẽ lưu vào table users
    sdt: '',        // Sẽ lưu vào table users
    pregnancies: 0,
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    diabetesPedigreeFunction: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gửi toàn bộ object data sang màn hình kết quả hoặc API
    onPredict(data);
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>Nhập Thông Số Dự Đoán</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

        {/* THÔNG TIN NGƯỜI DÙNG (Table users) */}
        <div style={styles.section}>
          <p style={styles.sectionTitle}>Thông tin cá nhân</p>
          <input name="name" placeholder="Họ và tên" onChange={handleChange} style={styles.input} required />
          <input name="sdt" placeholder="Số điện thoại (10 số)" onChange={handleChange} style={styles.input} required />
        </div>

        {/* THÔNG SỐ LÂM SÀNG (Table diabetes_predict) */}
        <div style={styles.section}>
          <p style={styles.sectionTitle}>Chỉ số sức khỏe</p>
          <div style={styles.grid}>
            <input type="number" name="pregnancies" placeholder="Số lần mang thai" onChange={handleChange} style={styles.input} />
            <input type="number" name="glucose" placeholder="Glucose" onChange={handleChange} style={styles.input} required />
            <input type="number" name="bloodPressure" placeholder="Huyết áp (BP)" onChange={handleChange} style={styles.input} />
            <input type="number" name="skinThickness" placeholder="Độ dày da" onChange={handleChange} style={styles.input} />
            <input type="number" name="insulin" placeholder="Insulin" onChange={handleChange} style={styles.input} />
            <input type="number" step="0.1" name="bmi" placeholder="Chỉ số BMI" onChange={handleChange} style={styles.input} required />
            <input type="number" step="0.001" name="diabetesPedigreeFunction" placeholder="DPF (Di truyền)" onChange={handleChange} style={styles.input} />
            <input type="number" name="age" placeholder="Tuổi" onChange={handleChange} style={styles.input} required />
          </div>
        </div>

        <button type="submit" style={styles.button}>Phân Tích Kết Quả</button>
      </form>
    </div>
  );
};

// Styles tối ưu cho giao diện nhập liệu nhiều trường
const styles = {
  card: { backgroundColor: '#fff', padding: '25px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', maxWidth: '500px', margin: 'auto' },
  title: { color: '#2c3e50', marginBottom: '20px', textAlign: 'center' },
  section: { marginBottom: '20px', textAlign: 'left' },
  sectionTitle: { fontWeight: 'bold', color: '#34495e', borderBottom: '1px solid #eee', paddingBottom: '5px', marginBottom: '10px' },
  form: { display: 'flex', flexDirection: 'column' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '14px', outline: 'none' },
  button: { marginTop: '20px', padding: '15px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }
};

export default InputScreen;