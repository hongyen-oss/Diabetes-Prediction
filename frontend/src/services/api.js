const BASE_URL = "http://127.0.0.1:8000";

export const predictDiabetes = async (patientData) => {
    try {
        const response = await fetch(`${BASE_URL}/predict`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify(patientData),
        });

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.detail || "Lỗi kết nối máy chủ");
        }

        return await response.json()

    } catch (error) {
        throw (error);
    }
}

export const fetchHistory = async () => {
    try {
        const response = await fetch(`${BASE_URL}/history`);
        if (!response.ok) {
            throw new Error("Không thể tải lịch sử dữ liệu.");
        }
        return await response.json();
    } catch (error) {
        throw error;
    }
};


