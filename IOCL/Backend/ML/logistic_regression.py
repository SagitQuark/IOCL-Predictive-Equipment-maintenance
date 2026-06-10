from sklearn.model_selection import train_test_split
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

#Loading dataset
df = pd.read_csv(r"IOCL\Processed_data\model_ready_data.csv")

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

#Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# print(X_train_scaled.shape)
# print(X_test_scaled.shape)
# print(X_train_scaled[:5])

# print("X_train shape:", X_train.shape)
# print("X_test shape:", X_test.shape)

# print("Y_train shape:", Y_train.shape)
# print("Y_test shape:", Y_test.shape)

# print("\nTrain Distribution:")
# print(Y_train.value_counts(normalize=True))

# print("\nTest Distribution:")
# print(Y_test.value_counts(normalize=True))

#Creating model
log_model = LogisticRegression(random_state=42)

#Training the model
log_model.fit(X_train_scaled, Y_train)

y_pred = log_model.predict(X_test_scaled)       #defining a variable for predictions on the test set
print(y_pred[:20])

#Metrics and accuracy
accuracy = accuracy_score(Y_test, y_pred)
print("Accuracy:", accuracy)
print("Classification Report:\n", classification_report(Y_test, y_pred))
cm = confusion_matrix(Y_test, y_pred)
print("Confusion Matrix:\n", cm)