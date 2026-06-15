import joblib
from pathlib import Path

MODEL_PATH = Path(__file__).parent / "models" / "best_model.pkl"

model = joblib.load(MODEL_PATH)