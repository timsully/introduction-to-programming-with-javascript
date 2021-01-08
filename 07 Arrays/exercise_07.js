// Use reduce to compute the acc of the squares of all of the numbers in an array:
let array = [3, 5, 7];

// let acc = 0;
// for (let i = 0; i < array.length; i++) {
//   acc += array[i] * array[i];
// }

//const reducer = (accumulator, currentValue) => accumulator + currentValue;
function f(accumulator, currentValue) {
  console.log(accumulator);
  return accumulator + currentValue * currentValue;
}

let sum = array.reduce(f, 4);
console.log(sum);

// console.log(accOfSquares(array)); // => 83
// console.log(acc);
