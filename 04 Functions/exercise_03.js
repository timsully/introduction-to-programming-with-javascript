function getNums(prompt) {
  let readlineSync = require("readline-sync");
  let inputFromUser = readlineSync.question(prompt);
  return inputFromUser;
}

function sums() {
  let numOne = getNums("Give me a number: ");
  let numTwo = getNums("Give me another number: ");

  sum = numOne * numTwo;
  console.log(`${numOne} * ${numTwo} is ${sum}!`);
}

sums();