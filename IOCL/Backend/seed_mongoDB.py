import json
from datetime import datetime

from database.mongodb import predictions_collection

with open(
    "seed_predictions.json",
    "r"
) as file:

    data = json.load(file)

for item in data:
    item["timestamp"] = datetime.fromisoformat(
        item["timestamp"]
    )

predictions_collection.delete_many({})

result = predictions_collection.insert_many(data)

print(
    f"{len(result.inserted_ids)} records inserted successfully!"
)