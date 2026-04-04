import joblib
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))
MODEL_PATH = os.path.join(BASE_DIR, "models", "model_package.joblib")

print("Loading model from:", MODEL_PATH)

model = joblib.load(MODEL_PATH)