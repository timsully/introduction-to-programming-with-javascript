/*
There are other ways to detect a -0 value. Without using Object.is, write
a function that will return true if the argument is -0, and false if it is
0 or any other number.
*/

function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

// or

function isNegativeZero(value) {
  return value === 0 && 1 / value === -Infinity;
}
