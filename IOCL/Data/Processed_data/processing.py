import pandas as pd
import numpy as np

File_path = 'IOCL/raw_data/ai4i2020.csv'
df = pd.read_csv(File_path)


# Feature engineering: Creating new features based on existing ones

# adding column for temperature difference
df["Temp difference"] = (df["Process temperature [K]"] - df["Air temperature [K]"] )

#Adding column for Power Using formula to calculate power: Power = Torque * Angular velocity
df["Power"] = (df["Torque [Nm]"] * (2*np.pi*df["Rotational speed [rpm]"])/60)

#Column for wear severity by multiplying tool wear and torque
df["Wear severity"] = (df["Tool wear [min]"] * df["Torque [Nm]"])

#adding column for load factor to calc the load on the machine by dividing torque by rotational speed
df["Load factor"] = (df["Torque [Nm]"] / df["Rotational speed [rpm]"])

df.to_csv('IOCL/Processed_data/processed_data.csv', index=False)