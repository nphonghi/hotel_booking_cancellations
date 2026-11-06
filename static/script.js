document.addEventListener("DOMContentLoaded", function() {
  const welcomeSection = document.getElementById("welcome-section");
  const predictionSection = document.getElementById("prediction-section");
  const formContainer = document.querySelector("#prediction-section .form-container");
  const startBtn = document.getElementById("start-btn");
  const bookingForm = document.getElementById("booking-form");
  const resultDiv = document.getElementById("result");

  startBtn.addEventListener("click", function() {
      welcomeSection.classList.remove("animate__fadeIn");
      welcomeSection.classList.add("animate__fadeOut");

      welcomeSection.addEventListener('animationend', () => {
          welcomeSection.classList.add("d-none");
          
          predictionSection.classList.remove("d-none");
          formContainer.classList.add("animate__fadeInUp"); 
      }, { once: true });
  });

  bookingForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const form = e.target;
    
      const depositType = form.deposit_type.value;
      const marketSegment = form.market_segment.value;
      const customerType = form.customer_type.value;
    
      const data = {
        lead_time: parseInt(form.lead_time.value) || 0,
        previous_cancellations: parseInt(form.previous_cancellations.value) || 0,
        required_car_parking_spaces: parseInt(form.required_car_parking_spaces.value),
        deposit_type_No_Deposit: depositType === "No Deposit" ? 1 : 0,
        deposit_type_Non_Refund: depositType === "Non Refund" ? 1 : 0,
        deposit_type_Refundable: depositType === "Refundable" ? 1 : 0,
        market_segment_Online_TA: marketSegment === "Online TA" ? 1 : 0,
        market_segment_Direct: marketSegment === "Direct" ? 1 : 0,
        market_segment_Corporate: marketSegment === "Corporate" ? 1 : 0,
        customer_type_Transient: customerType === "Transient" ? 1 : 0,
        customer_type_Contract: customerType === "Contract" ? 1 : 0,
      };
    
      resultDiv.textContent = "Đang phân tích dữ liệu...";
      resultDiv.className = "alert alert-info mt-4 text-center";

      fetch("/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(response => {
        resultDiv.textContent = response.result;
        resultDiv.classList.remove("alert-info");
    
        if (response.result.includes("🔴")) {
          resultDiv.classList.add("alert-danger");
        } else {
          resultDiv.classList.add("alert-success");
        }
      })
      .catch(error => {
          console.error('Error:', error);
          resultDiv.textContent = "Có lỗi xảy ra, vui lòng thử lại!";
          resultDiv.className = "alert alert-warning mt-4 text-center";
      });
  });
});