import joblib
import pandas as pd

model = joblib.load("best_model.pkl")
print("Model loaded successfully!")

sample = pd.DataFrame([[
    300,
    310,
    1500,
    40,
    100,
    10,
    6283,
    4000,
    0.0267,
    0,
    1
]], columns=[
    'Air temperature [K]',
    'Process temperature [K]',
    'Rotational speed [rpm]',
    'Torque [Nm]',
    'Tool wear [min]',
    'Temp difference',
    'Power',
    'Wear severity',
    'Load factor',
    'Type_L',
    'Type_M'
])

prediction = model.predict(sample)
print(prediction)