from fastapi import APIRouter
from database.mongodb import predictions_collection

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)

@router.get("/summary")
def get_analytics_summary():
    
    total_machines = predictions_collection.count_documents({})
    
    healthy_machines = predictions_collection.count_documents({
        "status": "Healthy"
    })
    
    warning_machines = predictions_collection.count_documents({
        "status": "Warning"
    })
    
    critical_machines = predictions_collection.count_documents({
        "status": "Critical"
    })
    
    predictions = list(
        predictions_collection.find(
            {},
            {"health_score":1, "_id":0}
        )
    )
    
    if predictions:
        avg_health_score = round(
            sum(p["health_score"] for p in predictions)
            / len(predictions)
        )
    else:
        avg_health_score = 0
    
    return{
        "totalMachines": total_machines,
        "healthyMachines": healthy_machines,
        "warningMachines": warning_machines,
        "criticalMachines": critical_machines,
        "avgHealthScore": avg_health_score
    }
    
@router.get("/machine-types")
def get_machine_type_distribution():

    return [
        {
            "name": "L",
            "count": predictions_collection.count_documents(
                {"machine_type": "L"}
            )
        },
        {
            "name": "M",
            "count": predictions_collection.count_documents(
                {"machine_type": "M"}
            )
        },
        {
            "name": "H",
            "count": predictions_collection.count_documents(
                {"machine_type": "H"}
            )
        }
    ]
    
@router.get("/risk-health-scatter")
def get_risk_health_scatter():

    predictions = list(
        predictions_collection.find(
            {},
            {
                "_id": 0,
                "machine_id": 1,
                "health_score": 1,
                "failure_probability": 1
            }
        )
    )

    return [
        {
            "id": p["machine_id"],
            "healthScore": p["health_score"],
            "failureProbability": p["failure_probability"]
        }
        for p in predictions
    ]
    
@router.get("/health-distribution")
def get_health_distribution():

    healthy_range = predictions_collection.count_documents(
        {"health_score": {"$gte": 80}}
    )

    warning_range = predictions_collection.count_documents(
        {
            "health_score": {
                "$gte": 50,
                "$lt": 80
            }
        }
    )

    critical_range = predictions_collection.count_documents(
        {"health_score": {"$lt": 50}}
    )

    return [
        {
            "range": "80-100",
            "count": healthy_range
        },
        {
            "range": "50-79",
            "count": warning_range
        },
        {
            "range": "0-49",
            "count": critical_range
        }
    ]