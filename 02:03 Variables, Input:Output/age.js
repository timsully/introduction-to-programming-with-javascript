let rlSync = require("readline-sync");
let age = rlSync.question("How old are you? ");

age = parseInt(age);

console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will ${age + 10} years old.`);
console.log(`In 20 years, you will ${age + 20} years old.`);
console.log(`In 30 years, you will ${age + 30} years old.`);
console.log(`In 40 years, you will ${age + 40} years old.`);