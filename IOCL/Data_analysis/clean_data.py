import pandas as pd

file_path = '../Processed_data/processed_data.csv'
df = pd.read_csv(file_path)

columns_to_drop = ["UDI",
                  "Product ID",
                  "TWF",
                  "HDF",
                  "PWF",
                  "OSF",
                  "RNF"
]
ml_df = df.drop(columns=columns_to_drop)

print("New dataset shape:\n")
print(ml_df.shape)

print("\nColumns:")
print(ml_df.columns)

# Saving the new clean dataset 
ml_df.to_csv("../Processed_data/model_ready_data.csv", index=False)
print("Saved Model ready dataset Succesfully")