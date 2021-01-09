/*
Without using either of those methods, write a function named
isNotANumber that returns true if the value passed to it as an
argument is NaN, false if it is not.
*/
function isNotANumber(value) {
  return value !== value;
}
