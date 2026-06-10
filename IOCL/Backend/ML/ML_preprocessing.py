import pandas as pd

df = pd.read_csv(r"IOCL\Processed_data\model_ready_data.csv")

df = pd.get_dummies(
    df,
    columns=["Type"],
    drop_first=True
)
print(df.shape)
print(df.columns)
# print(df.head())