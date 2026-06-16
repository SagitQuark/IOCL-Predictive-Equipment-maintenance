from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from apis.machine_routes import router as machine_router
from apis.prediction_routes import router as prediction_router

app = FastAPI(
    title="IOCL Predictive Maintenance API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    prediction_router,
    tags=["Predictions"]
)
app.include_router(
    machine_router,
    tags=["Machines"]
)