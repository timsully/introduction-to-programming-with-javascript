/*
Write a function that compares the length of two strings. It should
return -1 if the first string is shorter, 1 if the second string is
shorter, and 0 if they're of equal length, as in the following example:
*/
function compareByLength(string1, string2) {
  let i = 0;
  if (string1.length === string2.length) {
    return 0;
  } else if (string1.length < string2.length) {
    return -1;
  } else {
    return 1;
  }
}

console.log(compareByLength("patience", "perseverance")); // -1
console.log(compareByLength("strength", "dignity")); // 1
console.log(compareByLength('humor', 'grace')); // 0
