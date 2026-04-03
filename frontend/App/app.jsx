import React, { useState, useEffect } from 'react';
import InputScreen from './App/input';
import ResultScreen from './App/result';
import api from './api';

function App() {
  const [step, setStep] = useState(1);
  const [predictionResult, setPredictionResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Hàm gọi API dự đoán
  const handlePredict = async (formData) => {
    setLoading(true);
    try {
      const response = await api.post('/predict', formData); //Backend phải có route @app.route('/api/predict', methods=['POST']).
      setPredictionResult(response.data); // Kết quả gồm: outcome, proba....
      setStep(2);
      fetchHistory(); // Cập nhật lại lịch sử sau khi dự đoán mới
    } catch (error) {
      alert("Lỗi kết nối Backend: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Hàm lấy lịch sử từ Database
  const fetchHistory = async () => {
    try {
      const response = await api.get('/history');//Backend phải có route @app.route('/api/history', methods=['GET']).
      setHistory(response.data);
    } catch (error) {
      console.error("Không thể lấy lịch sử", error);
    }
  };

  useEffect(() => { fetchHistory(); }, []);

  return (
    <div style={{ padding: '20px' }}>
      {loading && <p>Đang tính toán...</p>}
      {step === 1 ? (
        <InputScreen onPredict={handlePredict} />
      ) : (
        <ResultScreen
          result={predictionResult}
          history={history}
          onBack={() => setStep(1)}
        />
      )}
    </div>
  );
}

export default App;
