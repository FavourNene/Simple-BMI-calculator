document.getElementById("submit").onclick = function () {
  weight = document.getElementById("weightInput").value;
  height = document.getElementById("heightInput").value;
  height = Number(height);
  weight = Number(weight);
  bmi = weight / height ** 2;

  document.getElementById("result").innerText = `Your BMI is ${bmi}`;
  if (18.5 <= bmi && bmi < 25) {
    document.getElementById("info").innerHTML =
      "Your BMI is within healthy range";
  } else if (bmi >= 25 && bmi < 30) {
    document.getElementById("info").innerHTML = "You are overweight!";
  } else if (bmi > 30) {
    document.getElementById("info").innerHTML = "You are obese!!!";
  } else {
    document.getElementById("info").innerHTML = "You are underweight.";
  }
};
