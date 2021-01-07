/*
Write a findIntegers function that takes an array argument and returns
an array that contains only the integers from the input array. Use the
filter method in your function.
*/
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);

function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

findIntegers(things);
console.log(integers); // => [1, 3, -4]
