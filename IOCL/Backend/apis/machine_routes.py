from fastapi import APIRouter
from database.mongodb import predictions_collection

router = APIRouter()

@router.get("/machines")
def get_machines():

    machines = list(
        predictions_collection.find(
            {},
            {"_id": 0}
        )
    )

    result = []

    for machine in machines:
        result.append({
            "id": machine.get("machine_id"),
            "type": machine.get("machine_type"),
            "rpm": machine.get("rotational_speed"),
            "torque": machine.get("torque"),
            "toolWear": machine.get("tool_wear"),
            "failureProbability": machine.get("failure_probability"),
            "healthScore": machine.get("health_score"),
            "status": machine.get("status")
        })

    return result