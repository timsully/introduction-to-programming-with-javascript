/*
Refactor the code so that you don't need to call randomNumberBetween from
two different locations, lines 6 and 10. Do not change the arguments you
pass to randomNumberBetween.
*/
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);

console.log(
  "It took " + String(tries) + " tries to get a number greater than 2"
);
