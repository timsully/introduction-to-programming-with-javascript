// Given an array of numbers [1, 3, 5, 7], calculate the sum.
// Write one example with a for loop and then with a reducer

// for loop
// function sum(arr) {
//   let sum = 0;
//   for (const val of arr) {
//     sum += val;
//   }
//   return sum;
// }

// console.log(sum([1, 3, 5, 7]));

// reducer function
function sum(arr) {
  const reducer = (sum, val) => sum + val;
  const initialValue = 0;
  return arr.reduce(reducer, initialValue);
}

console.log(sum([1, 3, 5, 7]));
