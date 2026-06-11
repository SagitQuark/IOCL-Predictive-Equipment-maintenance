import pandas as pd
from sklearn.model_selection import train_test_split
import xgboost as xgb
from xgboost import XGBClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

file_path = '../Processed_data/model_ready_data.csv'
df = pd.read_csv(file_path)

df.columns = df.columns.str.replace('[', '', regex=False)
df.columns = df.columns.str.replace(']', '', regex=False)
#Encode type
df = pd.get_dummies(
    df,
    columns=["Type"],
    drop_first=True
)

#features and Targets
X = df.drop("Machine failure", axis=1)
Y = df["Machine failure"]

X_train, X_test, Y_train, Y_test = train_test_split(
    X,
    Y,
    test_size=0.2,
    stratify=Y,
    random_state=42)

#Loading the model
xgb_model = XGBClassifier(
    random_state=42
)

print(X.columns.tolist())
#Training the model
xgb_model.fit(
    X_train,
    Y_train
)

#predictions
xgb_pred = xgb_model.predict(X_test)
xgb_accuracy = accuracy_score(Y_test, xgb_pred)
print("XGBoost accuracy:", xgb_accuracy)
print("XGBoost Predictions:", xgb_pred)
print(
    classification_report(
        Y_test,
        xgb_pred
    )
)

xgb_cm = confusion_matrix(
    Y_test,
    xgb_pred
)
print("Confusion Matrix:\n", xgb_cm)