const readline = require('readline-sync');

const name = readline.question('What is your name? ');
const age = readline.questionInt('How old are you? ');

console.log(`Hi ${name}!`);
console.log(`You are ${age} years old.`);
