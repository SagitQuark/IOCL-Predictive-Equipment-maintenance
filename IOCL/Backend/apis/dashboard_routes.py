from fastapi import APIRouter
from database.mongodb import predictions_collection

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/high-risk-machines")
def get_high_risk_machines():

    machines = list(
        predictions_collection.find(
            {},
            {
                "_id": 0,
                "machine_id": 1,
                "failure_probability": 1,
                "status": 1
            }
        )
    )

    machines.sort(
        key=lambda x: x["failure_probability"],
        reverse=True
    )

    return [
        {
            "id": machine["machine_id"],
            "risk": machine["failure_probability"],
            "status": machine["status"]
        }
        for machine in machines[:5]
    ]
    
@router.get("/health-trends")
def get_health_trends():

    pipeline = [
        {
            "$group": {
                "_id": {
                    "$dateToString": {
                        "format": "%Y-%m-%d",
                        "date": "$timestamp"
                    }
                },
                "avgHealthScore": {
                    "$avg": "$health_score"
                }
            }
        },
        {
            "$sort": {
                "_id": 1
            }
        }
    ]

    results = list(
        predictions_collection.aggregate(pipeline)
    )

    return [
        {
            "date": item["_id"],
            "score": round(item["avgHealthScore"], 2)
        }
        for item in results
    ]