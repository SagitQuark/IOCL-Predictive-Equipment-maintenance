import matplotlib.pyplot as plt
import seaborn as sns
import pandas as pd

file_path = '../Processed_data/processed_data.csv'
df = pd.read_csv(file_path)
numeric_df = df.select_dtypes(include=['int64', 'float64'])

plt.figure(figsize=(14,10))
sns.heatmap(
    numeric_df.corr(),
    cmap="coolwarm",
    annot=False
)

plt.title("Correlation Matrix")
plt.savefig("Corelation_matrix.png")
plt.show()

corr = numeric_df.corr()

print(
    corr["Machine failure"]
    .sort_values(ascending=False)
)