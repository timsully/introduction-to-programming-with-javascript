/*
Create a function that calculates a person's body mass index (BMI).
It should take two parameters: someone's height (in cm) and weight (in kg).
The formula for calculating the BMI is as follows:

bmi = weightInKilograms / heightInMeters**2;

Note that formular requires a height in meters, but the function takes the
height in centimeters (1 meter is equivalent to 100 centimeters).

Return the result as a string rounded to two decimals. For example:
*/
function calculateBMI(heightInCentimeters, weigthInKilograms) {
  let heightInMeters = heightInCentimeters / 100;
  let bmi = weigthInKilograms / heightInMeters ** 2;

  return bmi.toFixed(2);
}

calculateBMI(180, 80); // "24.69"
