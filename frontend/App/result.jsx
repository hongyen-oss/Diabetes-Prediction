import React from 'react';

const ResultScreen = ({ result, history, onBack }) => {
  return (
    <div style={styles.container}>
      {/* 1. HIỂN THỊ KẾT QUẢ DỰ ĐOÁN MỚI NHẤT */}
      <div style={styles.resultCard}>
        <h2>Kết Quả Dự Đoán</h2>
        <div style={result.outcome === 1 ? styles.positive : styles.negative}>
          {result.outcome === 1 ? "DƯƠNG TÍNH (Nguy cơ cao)" : "ÂM TÍNH (Bình thường)"}
        </div>
        <p>Xác suất: {(result.prediction_proba * 100).toFixed(2)}%</p>
      </div>

      {/* 2. BẢNG LỊCH SỬ (Khớp với SQL diabetes_predict) */}
      <div style={styles.historySection}>
        <h3>Lịch sử dự đoán gần đây</h3>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Thời gian</th>
              <th>Glucose</th>
              <th>BMI</th>
              <th>Kết quả</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>{new Date(item.created_at).toLocaleDateString()}</td>
                <td>{item.Glucose}</td> {/* nếu backend viết chữ thường thì cần sửa lại  */}
                <td>{item.BMI}</td>
                <td style={{ color: item.Outcome === 1 ? 'red' : 'green' }}>
                  {item.Outcome === 1 ? 'Positive' : 'Negative'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={onBack} style={styles.btn}>Quay lại</button>
    </div>
  );
};

const styles = {
  container: { maxWidth: '800px', margin: 'auto' },
  resultCard: { padding: '20px', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '30px' },
  positive: { color: 'white', backgroundColor: '#e74c3c', padding: '15px', borderRadius: '5px', fontWeight: 'bold' },
  negative: { color: 'white', backgroundColor: '#2ecc71', padding: '15px', borderRadius: '5px', fontWeight: 'bold' },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '10px' },
  historySection: { overflowX: 'auto' },
  btn: { marginTop: '20px', padding: '10px 30px', cursor: 'pointer' }
};

export default ResultScreen;
