from pydantic import BaseModel
from typing import Dict, Any

class PatientFeature(BaseModel):
    pregnancies: int
    glucose: float
    blood_pressure: float
    skin_thickness: float
    insulin: float
    bmi: float
    dpf: float
    age: int

class PredictionResponse(BaseModel):
    prediction: int
    message: str
    status: str

class ModelInfoResponse(BaseModel):
    model_name: str
    version: str
    metrics: Dict[str, float]
    features: list[str]