import React from 'react';

const ResultScreen = ({ info, onBack }) => {
  return (
    <div style={styles.card}>
      <h2> Kết Quả Phân Tích</h2>
      <div style={styles.infoBox}>
        <p><strong>Glucose:</strong> {info.glucose}</p>
        <p><strong>BMI:</strong> {info.bmi}</p>
        <p><strong>Tuổi:</strong> {info.age}</p>
      </div>
      <div style={styles.status}>
       Hệ thống đang phân tích dựa trên Model...
      </div>
      <button onClick={onBack} style={styles.button}>Quay lại nhập liệu</button>
    </div>
  );
};

const styles = {
  card: { padding: '20px', border: '1px solid #ddd', borderRadius: '10px', background: '#f9f9f9' },
  infoBox: { textAlign: 'left', marginBottom: '20px' },
  status: { padding: '10px', color: '#856404', backgroundColor: '#fff3cd', marginBottom: '20px', borderRadius: '5px' },
  button: { padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }
};

export default Result;