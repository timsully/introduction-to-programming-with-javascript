/*
Use map and filter to first determine the lengths of all the elements
in an array of string values, then discard the even values (keep the odd values).
*/
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
  // Counts letters within each indexed item in the array
  // and creates a new array and returns the letter count for each index in arr
  let lengths = arr.map((letters) => letters.length);

  // then evaluates the length of each string and if it's
  // odd it returns them in a new array
  let oddLengths = lengths.filter((number) => number % 2 === 1);
  return oddLengths;
}

console.log(oddLengths(arr)); // => [1, 5, 3]
