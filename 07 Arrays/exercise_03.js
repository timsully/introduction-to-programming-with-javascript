/*
In this problem, we're again interested in even numbers, but this
time the numbers are in nested arrays in a single outer array.
*/
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

myArray.forEach(function(nestedArray) {
  // console.log(nestedArray); // to view the nested arrays being logged
  nestedArray.forEach(function(value) { // this allows us to access the elements in the nested array
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});
