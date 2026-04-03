import React, { useState } from 'react';

const InputScreen = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    name: '',
    sdt: '',
    pregnancies: 0,
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    DiabetesPedigreeFunction: '', 
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.sdt || !formData.name || !formData.glucose || !formData.bmi) {
      alert("Vui lòng nhập đầy đủ Họ tên, SĐT và các chỉ số sức khỏe!");
      return;
    }
    onPredict(formData); 
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* TIÊU ĐỀ  */}
      <h1 style={styles.mainTitle}>DIABETES PREDICTION</h1>

      <div style={styles.container}>
        <h2 style={styles.header}>🩺 Nhập Thông Số Dự Đoán</h2>
        <form onSubmit={handleSubmit} style={styles.form}>

          {/* PHẦN 1: THÔNG TIN (Table: users) */}
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Thông tin khách hàng</h4>
            <div style={styles.grid}>
                <input name="name" placeholder="Họ và tên" onChange={handleChange} style={styles.input} />
                <input name="sdt" placeholder="Số điện thoại (10 số)" onChange={handleChange} style={styles.input} />
            </div>
          </div>

          {/* PHẦN 2: CHỈ SỐ LÂM SÀNG */}
          <div style={styles.section}>
            <h4 style={styles.sectionTitle}>Chỉ số lâm sàng</h4>
            <div style={styles.grid}>
              <div style={styles.field}>
                <label style={styles.label}>Số lần mang thai</label>
                <input type="number" name="pregnancies" onChange={handleChange} style={styles.input} placeholder="0" />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Glucose (Đường huyết)</label>
                <input type="number" name="glucose" onChange={handleChange} style={styles.input} placeholder="mg/dL" />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Huyết áp</label>
                <input type="number" name="bloodPressure" onChange={handleChange} style={styles.input} placeholder="mm Hg" />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Độ dày da</label>
                <input type="number" name="skinThickness" onChange={handleChange} style={styles.input} placeholder="mm" />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Insulin</label>
                <input type="number" name="insulin" onChange={handleChange} style={styles.input} placeholder="mu U/ml" />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Chỉ số BMI</label>
                <input type="number" step="0.1" name="bmi" onChange={handleChange} style={styles.input} placeholder="25.5" />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Hệ số di truyền (DPF)</label>
                <input type="number" step="0.001" name="dpf" onChange={handleChange} style={styles.input} placeholder="0.47" />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Tuổi</label>
                <input type="number" name="age" onChange={handleChange} style={styles.input} placeholder="Tuổi" />
              </div>
            </div>
          </div>

          {/* NÚT BẤM CĂN GIỮA */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit" style={styles.button}>Phân Tích & Lưu Kết Quả</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  
  mainTitle: {
    color: '#FFD700', 
    textAlign: 'center',
    fontSize: '35px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)', 
    textTransform: 'uppercase'
  },
  container: { backgroundColor: '#fff', padding: '25px', borderRadius: '15px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '550px', margin: '0 auto' },
  header: { color: '#2c3e50', textAlign: 'center', marginBottom: '25px', fontSize: '20px' },
  section: { marginBottom: '20px' },
  sectionTitle: { fontSize: '15px', color: '#3498db', borderBottom: '2px solid #3498db', paddingBottom: '5px', marginBottom: '15px', fontWeight: 'bold' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' },
  field: { display: 'flex', flexDirection: 'column' },
  label: { fontSize: '12px', marginBottom: '5px', fontWeight: 'bold', color: '#7f8c8d' },
  input: { padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', outline: 'none' },
  form: { display: 'flex', flexDirection: 'column' },
  button: { 
    marginTop: '20px', 
    padding: '15px 40px', 
    backgroundColor: '#2ecc71', 
    color: 'white', 
    border: 'none', 
    borderRadius: '8px', 
    fontSize: '16px', 
    fontWeight: 'bold', 
    cursor: 'pointer', 
    transition: '0.3s' 
  }
};

export default InputScreen;