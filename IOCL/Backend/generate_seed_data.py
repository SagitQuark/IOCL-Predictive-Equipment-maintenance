import pandas as pd
import random
import json
from datetime import datetime, timedelta
import joblib
import math
from collections import Counter

df = pd.read_csv(
    r"IOCL\Data\Processed_data\model_ready_data.csv"
)
model = joblib.load(
    r"IOCL\Backend\ML\models\best_model.pkl"
)

sample_df = df.sample(
    n=5000,
    replace=False,
    random_state=42
).reset_index(drop=True)

print(sample_df.shape)

seed_data = []

def get_status(probability):

    if probability >= 0.8:
        return "Critical"
    elif probability >= 0.5:
        return "Warning"

    return "Healthy"

print(type(model))

for index, row in sample_df.iterrows():

    machine_id = f"M-{1000 + index}"

    timestamp = datetime.now() - timedelta(
        days=random.randint(0, 60)
    )

    temp_difference = (
    row["Process temperature [K]"]
    - row["Air temperature [K]"]
)

    power = (
        row["Torque [Nm]"]
        * (2 * math.pi * row["Rotational speed [rpm]"] / 60)
    )

    wear_severity = (
        row["Tool wear [min]"]
        * row["Torque [Nm]"]
    )

    load_factor = (
        row["Torque [Nm]"]
        / row["Rotational speed [rpm]"]
    )

    type_l = 1 if row["Type"] == "L" else 0
    type_m = 1 if row["Type"] == "M" else 0
    
    features = pd.DataFrame([[
    row["Air temperature [K]"],
    row["Process temperature [K]"],
    row["Rotational speed [rpm]"],
    row["Torque [Nm]"],
    row["Tool wear [min]"],
    temp_difference,
    power,
    wear_severity,
    load_factor,
    type_l,
    type_m
]], columns=[
    "Air temperature [K]",
    "Process temperature [K]",
    "Rotational speed [rpm]",
    "Torque [Nm]",
    "Tool wear [min]",
    "Temp difference",
    "Power",
    "Wear severity",
    "Load factor",
    "Type_L",
    "Type_M"
])
    
    prediction = int(
    model.predict(features)[0]
)

    probability = float(
        model.predict_proba(features)[0][1]
    )

    failure_probability = round(
        probability * 100,
        2
    )

    health_score = round(
        (1 - probability) * 100,
        2
    )

    status = get_status(probability)
        
    seed_data.append({
    "machine_id": machine_id,
    "machine_type": row["Type"],

    "air_temperature": round(
        float(row["Air temperature [K]"]), 2
    ),

    "process_temperature": round(
        float(row["Process temperature [K]"]), 2
    ),

    "rotational_speed": int(
        row["Rotational speed [rpm]"]
    ),

    "torque": round(
        float(row["Torque [Nm]"]), 2
    ),

    "tool_wear": int(
        row["Tool wear [min]"]
    ),

    "prediction": prediction,

    "failure_probability": failure_probability,

    "health_score": health_score,

    "status": status,

    "timestamp": timestamp.isoformat()
})
    
print(seed_data[0])
print(len(seed_data))

healthy_records = [
    item for item in seed_data
    if item["status"] == "Healthy"
]

warning_records = [
    item for item in seed_data
    if item["status"] == "Warning"
]

critical_records = [
    item for item in seed_data
    if item["status"] == "Critical"
]

print("Healthy :", len(healthy_records))
print("Warning :", len(warning_records))
print("Critical:", len(critical_records))

final_seed_data = (
    random.sample(healthy_records, 120)
    + warning_records
    + random.sample(critical_records, 56)
)

random.shuffle(final_seed_data)

print("Final Dataset Size:", len(final_seed_data))

with open(
    "seed_predictions.json",
    "w"
) as file:

    json.dump(
        final_seed_data,
        file,
        indent=4
    )

print("Balanced JSON file generated successfully!")