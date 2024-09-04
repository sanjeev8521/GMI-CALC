function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultElement = document.getElementById('result');
    if (weight <= 0 || height <= 0) {
        resultElement.innerText = "Invalid input: Weight and height must be positive values.";
        return;
    }
    const bmi = weight / (height * height);
    let classification;
    if (bmi < 18.5) {
        classification = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        classification = "Overweight";
    } else {
        classification = "Obese";
    }
    resultElement.innerText = `Your BMI is ${bmi.toFixed(2)}. You are classified as: ${classification}.`;
}
