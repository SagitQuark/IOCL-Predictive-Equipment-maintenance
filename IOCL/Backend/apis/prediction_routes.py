from fastapi import APIRouter
from schemas.prediction_schema import PredictionInput
from database.mongodb import predictions_collection
from datetime import datetime, UTC

from ML.model_loader import model

import pandas as pd
import math

router = APIRouter()


def build_features(data):

    temp_difference = (
        data.process_temperature
        - data.air_temperature
    )

    power = (
        data.torque
        * (2 * math.pi * data.rotational_speed / 60)
    )

    wear_severity = (
        data.tool_wear
        * data.torque
    )

    load_factor = (
        data.torque
        / data.rotational_speed
    )

    type_l = 1 if data.machine_type.upper() == "L" else 0
    type_m = 1 if data.machine_type.upper() == "M" else 0

    return pd.DataFrame([[
        data.air_temperature,
        data.process_temperature,
        data.rotational_speed,
        data.torque,
        data.tool_wear,
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


@router.post("/predict")
def predict_failure(data: PredictionInput):

    features = build_features(data)

    prediction = model.predict(features)[0]

    probabilities = model.predict_proba(features)

    probability = probabilities[0][1]

    health_score = round((1 - probability) * 100, 2)

    if probability >= 0.8:
        status = "Critical"
    elif probability >= 0.5:
        status = "Warning"
    else:
        status = "Healthy"

    #Inserting Data
    predictions_collection.insert_one({
    "machine_id": data.machine_id,
    "machine_type": data.machine_type,
    "air_temperature": data.air_temperature,
    "process_temperature": data.process_temperature,
    "rotational_speed": data.rotational_speed,
    "torque": data.torque,
    "tool_wear": data.tool_wear,

    "prediction": int(prediction),
    "failure_probability": round(probability * 100, 2),
    "health_score": health_score,
    "status": status,
    
    "timestamp": datetime.now(UTC)
})
    return {
        "prediction": int(prediction),
        "failure_probability": round(probability * 100, 2),
        "health_score": health_score,
        "status": status
    }
    
@router.get("/predictions")
def get_predictions():

    predictions = list(
        predictions_collection.find(
            {},
            {"_id": 0}
        )
    )

    return predictions