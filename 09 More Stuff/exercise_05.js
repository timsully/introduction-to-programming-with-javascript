// What does the following function do?
function doSomething(string) {
  return string
  // converts a string into an array of words
  .split(" ")
  // reverses that array
  .reverse()
  //and then returns a new array that contains the lengths of the words.
  .map((value) => value.length);
}

console.log(doSomething("Pursuit of happiness")); // => [ 9, 2, 7 ]
