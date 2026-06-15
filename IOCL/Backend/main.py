from fastapi import FastAPI

from apis.prediction_routes import router as prediction_router

app = FastAPI(
    title="IOCL Predictive Maintenance API"
)

app.include_router(
    prediction_router,
    tags=["Predictions"]
)