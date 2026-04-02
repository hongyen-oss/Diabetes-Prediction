from sqlalchemy import Column, Integer, String, Float, TIMESTAMP, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from backend import db, app

class Users(db.Model):
    __tablename__ = "users"

    User_ID = Column(Integer, primary_key=True, autoincrement=True)
    Phone_Number = Column(String(10), nullable=False, unique=True)
    Name = Column(String(50))

    # Quan hệ 1-nhiều
    predictions = relationship("DiabetesPredict", back_populates="user")

class DiabetesPredict(db.Model):
    __tablename__ = "diabetes_predict"

    ID = Column(Integer, primary_key=True, autoincrement=True)
    Pregnancies = Column(Integer)
    Glucose = Column(Integer)
    BloodPressure = Column(Integer)
    SkinThickness = Column(Integer)
    Insulin = Column(Integer)
    BMI = Column(Float)
    DiabetesPedigreeFunction = Column(Float)
    Age = Column(Integer)
    Outcome = Column(Integer)
    Prediction_proba = Column(Float)
    Created_at = Column(TIMESTAMP, server_default=func.now())
    User_ID = Column(Integer, ForeignKey("users.User_ID"), nullable=False)

    user = relationship("Users", back_populates="predictions")

# if __name__ == "__main__":
#     with app.app_context():
#         db.create_all()
#         print("Tạo bảng thành công")