
import React, { useState } from "react";
import { predictDiabetes, fetchHistory } from "../services/api";
import "../App.css";

const PredictionForm = () => {

  const [formData, setFormData] = useState({
    pregnancies: 0, glucose: 0, blood_pressure: 0, skin_thickness: 0,
    insulin: 0, bmi: 0, dpf: 0, age: 0,
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("form");
  const [historyData, setHistoryData] = useState([]);


  const formatDate = (dateString) => {
    if (!dateString) return "---";
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN") + " - " + date.toLocaleTimeString("vi-VN", { hour: '2-digit', minute: '2-digit' });
  };
  
  const handleLoadHistory = async () => {
    setViewMode("history");
    try {
      const data = await fetchHistory();
      setHistoryData(data);
    } catch (err) {
      setError("Không thể lấy dữ liệu lịch sử.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) || 0 });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); setError(null); setResult(null);
    try {
      const data = await predictDiabetes(formData);
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="form-card" style={{ maxWidth: viewMode === "history" ? "900px" : "650px", transition: "0.3s" }}>

        {/* Thanh điều hướng */}
        <div className="header-tabs">
          <button className={viewMode === "form" ? "tab-btn active" : "tab-btn"} onClick={() => setViewMode("form")}>
            Dự Đoán Mới
          </button>
          <button className={viewMode === "history" ? "tab-btn active" : "tab-btn"} onClick={handleLoadHistory}>
            Lịch Sử Khám
          </button>
        </div>

        {/* --- GIAO DIỆN FORM NHẬP LIỆU --- */}
        {viewMode === "form" && (
          <>
            <h2 className="form-title">AI Dự Đoán Tiểu Đường</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-grid">
                <div className="input-group"><label>Số lần mang thai</label><input type="number" name="pregnancies" onChange={handleChange} required /></div>
                <div className="input-group"><label>Đường huyết (Glucose)</label><input type="number" name="glucose" onChange={handleChange} required /></div>
                <div className="input-group"><label>Huyết áp (mmHg)</label><input type="number" name="blood_pressure" onChange={handleChange} required /></div>
                <div className="input-group"><label>Độ dày da (mm)</label><input type="number" name="skin_thickness" onChange={handleChange} required /></div>
                <div className="input-group"><label>Insulin</label><input type="number" name="insulin" onChange={handleChange} required /></div>
                <div className="input-group"><label>Chỉ số BMI</label><input type="number" step="0.1" name="bmi" onChange={handleChange} required /></div>
                <div className="input-group"><label>DPF</label><input type="number" step="0.001" name="dpf" onChange={handleChange} required /></div>
                <div className="input-group"><label>Tuổi</label><input type="number" name="age" onChange={handleChange} required /></div>
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Đang xử lý dữ liệu..." : "Dự Đoán Ngay"}
              </button>
            </form>
            {error && <div className="message-box error-box"><strong>Lỗi:</strong> {error}</div>}
            {result && (
              <div className={`message-box ${result.prediction === 1 ? 'danger-box' : 'safe-box'}`}>
                <h3>{result.prediction === 1 ? "Cảnh báo" : "An toàn"}</h3>
                <p>{result.message}</p>
              </div>
            )}
          </>
        )}

        {/* --- GIAO DIỆN BẢNG LỊCH SỬ --- */}
        {viewMode === "history" && (
          <div className="history-section">
            <h2 className="form-title">Lịch Sử Phân Tích</h2>
            {historyData.length === 0 ? (
              <p style={{ textAlign: "center", color: "#6b7280" }}>Chưa có dữ liệu lịch sử nào.</p>
            ) : (
              <div className="table-wrapper">
                <table className="history-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Glucose</th>
                      <th>Huyết Áp</th>
                      <th>BMI</th>
                      <th>Tuổi</th>
                      <th>Kết Quả AI</th>
                      <th>Ngày khám</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historyData.map((item, index) => (
                      <tr key={index}>
                        <td>#{item.id}</td>
                        <td>{item.glucose}</td>
                        <td>{item.blood_pressure}</td>
                        <td>{item.bmi}</td>
                        <td>{item.age}</td>

                        <td>
                          <span className={item.prediction === 1 ? "badge danger" : "badge safe"}>
                            {item.prediction === 1 ? "Có Nguy Cơ" : "An Toàn"}
                          </span>
                        </td>
                        <td>{formatDate(item.created_date)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default PredictionForm;