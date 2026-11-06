from flask import Flask, request, render_template, jsonify
import pickle
import pandas as pd

app = Flask(__name__)

# Load model và đặc trưng
with open("model.pkl", "rb") as f:
    model = pickle.load(f)

with open("features.pkl", "rb") as f:
    FEATURES = pickle.load(f)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    # Convert dict → DataFrame → reindex đúng thứ tự đặc trưng
    input_df = pd.DataFrame([data])
    input_df = input_df.reindex(columns=FEATURES, fill_value=0)

    prediction = model.predict(input_df)[0]
    result = "Đơn đặt phòng có khả năng bị hủy!" if prediction == 1 else "Đơn đặt phòng sẽ được giữ!"

    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)
