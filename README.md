# Classification of Hotel Booking Cancellations.

In the hotel business, booking cancellations by customers are a common and serious issue. They not only lead to a direct loss in revenue but also affect operational planning, resource allocation, and vacancy management. A sudden cancellation can result in rooms not being reassigned in time, causing resource waste. Therefore, early prediction of whether a booking will be canceled is extremely important, enabling hotels to take timely intervention measures.

The main objective of this study is to develop machine learning models capable of classifying and predicting whether a specific hotel booking will be canceled or not based on relevant booking information. Additionally, the goal is to apply these models to real-world scenarios to support practical prediction and decision-making in hotel operations.

## Project Workflow

![Project Workflow](images/workflow.png)

## Evaluation

| Model Name           | Accuracy | Precision | Recall | F1-score | AUC   |
|----------------------|----------|-----------|--------|----------|--------|
| Decision Tree        | 80.30    | 70.50     | 80.61  | 75.22    | 88.63  |
| Random Forest        | 83.78    | 77.41     | 79.43  | 78.41    | 91.38  |
| **XGBoost**          | **84.70**| **79.18** | **79.67** | **79.42** | **92.06** |
| LightGBM             | 83.76    | 78.40     | 77.57  | 77.98    | 90.92  |
| CatBoost             | 80.09    | 67.89     | 87.87  | 76.60    | 91.49  |
| Logistic Regression  | 78.42    | 70.62     | 71.56  | 71.09    | 85.14  |
| TabNet               | 82.16    | 85.12     | 62.87  | 72.32    | 88.48  |
| FT-Transformer       | 81.27    | 87.10     | 58.10  | 69.70    | 86.66  |

## Demo
![Project Workflow](images/welcome.png)
![Project Workflow](images/demo.png)
![Project Workflow](images/true.png)
![Project Workflow](images/false.png)
