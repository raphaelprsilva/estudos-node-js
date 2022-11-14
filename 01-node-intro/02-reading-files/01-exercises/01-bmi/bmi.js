/**
 * Calculate BMI
 * @param {number} weight - Weight in kg
 * @param {number} height - Height in m
 * @returns {number} BMI value in kg/m^2
 */

const bmi = (weight, height) => {
  const bmi = weight / (height * height);
  return bmi.toFixed(2);
};

module.exports = bmi;
