// 🌐 Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// 🔮 Prediction Form Logic
document.getElementById("predictForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  // 🎯 Get values from form
  const contract = document.getElementById("contract").value;
  const gender = document.getElementById("gender").value;
  const internet = document.getElementById("internet").value;
  const monthlyCharges = parseFloat(document.getElementById("monthly").value);
  const totalCharges = parseFloat(document.getElementById("total").value);

  const resultBox = document.getElementById("resultBox");
  const loader = document.getElementById("loader");

  // ⏳ Show loader
  loader.style.display = "block";
  resultBox.innerHTML = "";

  // 🧠 Simulated prediction logic (You can replace this with real model logic later)
  setTimeout(() => {
    loader.style.display = "none"; // Hide loader

    let simulatedPrediction = "No Churn";
    let confidence = "91%";

    if (contract === "Month-to-month" && monthlyCharges > 80) {
      simulatedPrediction = "Churn";
      confidence = "85%";
    } else if (totalCharges < 300 || internet === "No") {
      simulatedPrediction = "Churn";
      confidence = "78%";
    }

    resultBox.innerHTML = `
      <span style="color:${simulatedPrediction === "Churn" ? 'red' : 'green'}">
        🔍 Prediction: <strong>${simulatedPrediction}</strong> (Confidence: ${confidence})
      </span>
    `;
  }, 1000); // Simulate loading
});

// 🎬 Slide-in Animation for cards/images
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slideUp");
    }
  });
});

document.querySelectorAll(".card, .dashboard-img, .insight-imgs img").forEach(el => {
  observer.observe(el);
});
