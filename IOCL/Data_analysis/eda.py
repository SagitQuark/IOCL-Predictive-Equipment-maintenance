import pandas as pd
import numpy as np

file_path = '../Processed_data/model_ready_data.csv'
df = pd.read_csv(file_path)

print("Dataframe shape:", df.shape) # Define the shape 

print("\nColumns:")
print(df.columns)

print("\nMissing Values:")
print(df.isnull().sum())

# print("\nTemp Difference Statistics:")
# print(df["Temp difference"].describe())

# print("\nPower Statistics:")
# print(df["Power"].describe())

# print("\nFirst 5 Rows:")
# print(df.head())

# print(df.columns.tolist())

# print("\nFailure Distribution:")
# print(df["Machine failure"].value_counts())

# print("\nFailure Percentage:")
# print(df["Machine failure"].value_counts(normalize=True)*100)

# print("\nTool Wear Failures:")
# print(df["TWF"].sum())

# print("\nHeat Dissipation Failures:")
# print(df["HDF"].sum())

# print("\nPower Failures:")
# print(df["PWF"].sum())

# print("\nOverstrain Failures:")
# print(df["OSF"].sum())

# print("\nRandom Failures:")
# print(df["RNF"].sum())
print("grouping mean values by machine failure:")
print(df.groupby("Machine failure").mean(numeric_only=True))