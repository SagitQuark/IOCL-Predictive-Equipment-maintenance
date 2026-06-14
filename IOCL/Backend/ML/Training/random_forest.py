import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import joblib
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

file_path = "IOCL/Data/Processed_data/model_ready_data.csv"
df = pd.read_csv(file_path)

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
rf_model = RandomForestClassifier(
    random_state=42
)

#Training the model
rf_model.fit(
    X_train,
    Y_train
)

#predictions
rf_pred = rf_model.predict(X_test)

rf_accuracy = accuracy_score(Y_test, rf_pred)
print("Random Forest accuracy:", rf_accuracy)
print("Classification Report:\n", classification_report(Y_test, rf_pred))

# Confusion matrix
cm_rf = confusion_matrix(
    Y_test,
    rf_pred
)
print("Confusion Matrix:\n", cm_rf)

#Feature Importance
feature_importance = pd.DataFrame({
    "Feature": X.columns,
    "Importance": rf_model.feature_importances_
})

feature_importance = feature_importance.sort_values(
    by="Importance",
    ascending=False
)
print("Feature Importance:\n", feature_importance)

# Save the model
joblib.dump(rf_model, "best_model.pkl")

print(X.columns.tolist())