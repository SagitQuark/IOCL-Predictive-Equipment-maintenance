from pydantic import BaseModel, Field

class PredictionInput(BaseModel):
    machine_id: str 
    machine_type: str = Field(..., pattern="^(L|M|H)$")

    air_temperature: float = Field(..., gt=0)
    process_temperature: float = Field(..., gt=0)

    rotational_speed: int = Field(..., gt=0)
    torque: float = Field(..., gt=0)
    tool_wear: int = Field(..., ge=0)