from sqlalchemy import Column, Integer, Float, DateTime, String
from database import Base
import datetime

class PredictionHistory(Base):
    __tablename__ = 'prediction_history'
    id = Column(Integer, primary_key=True)
    pregnancies = Column(Integer)
    glucose = Column(Float)
    blood_pressure = Column(Float)
    skin_thickness = Column(Float)
    insulin = Column(Float)
    bmi = Column(Float)
    dpf = Column(Float)
    age = Column(Integer)
    prediction = Column(Integer)
    created_date = Column(DateTime, default=datetime.datetime.now())