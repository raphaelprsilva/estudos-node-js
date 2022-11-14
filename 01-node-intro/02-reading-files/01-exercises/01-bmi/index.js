const readlinesync = require('readline-sync');
const bmi = require('./bmi.js');

const userBMICategory = (userBMI) => {
  if (userBMI < 18.5) {
    return 'Underweight';
  } else if (userBMI >= 18.5 && userBMI <= 24.9) {
    return 'Normal weight';
  } else if (userBMI >= 25 && userBMI <= 29.9) {
    return 'Overweight';
  } else if (userBMI >= 30) {
    return 'Obesity';
  }
};

const main = () => {
  const userWeight = readlinesync.questionFloat('Enter your weight in kg: ');
  const userHeight = readlinesync.questionFloat('Enter your height in m: ');
  const userBMI = bmi(userWeight, userHeight);
  const userBMIStatus = userBMICategory(userBMI);

  console.log(`Your BMI is ${userBMI}`);
  console.log(`Your BMI status is ${userBMIStatus}`);
};

main();
