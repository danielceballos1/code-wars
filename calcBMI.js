function bmi(weight, height) {
    // calculate bmi and store in bmi variable
    const bmi = weight / (height * height);
    // return bmi result if bmi meets condition
    if(bmi <= 18.5) return "Underweight";
    if(bmi <= 25) return "Normal";
    if(bmi <= 30) return "Overweight";
    return "Obese";
  }