import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("../Processed_data/model_ready_data.csv")

#Box plot for Torque vs Machine failure
plt.figure(figsize=(8,5))
sns.boxplot(x="Machine failure", y="Torque [Nm]", data=df)
plt.title("Torque distribution by Machine Failure")
plt.savefig("Torque Vs Machine Faliure")
plt.show()

#Box plot for Tool Wear Vs Faliure
plt.figure(figsize=(8,5))

sns.boxplot(
    x="Machine failure",
    y="Tool wear [min]",
    data=df)

plt.title("Tool Wear vs Machine Failure")

plt.savefig("wear_vs_failure.png")
plt.show()

#Box plot for Power vs Faliure
plt.figure(figsize=(8,5))

sns.boxplot(
    x="Machine failure",
    y="Power",
    data=df
)

plt.title("Power vs Machine Failure")

plt.savefig("power_vs_failure.png")
plt.show()

# Box plot for machine faliure Vs Load factor
plt.figure(figsize=(8,5))

sns.boxplot(
    x="Machine failure",
    y="Load factor",
    data=df
)

plt.title("Load Factor vs Machine Failure")

plt.savefig("loadfactor_vs_failure.png")
plt.show()

