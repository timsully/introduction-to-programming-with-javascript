/*
Write a function similar to the oddLengths function from Exercise 6, but
don't use map or filter. Instead, try to use the reduce method.
*/
let arr = ["a", "abcd", "abcde", "abc", "ab"];

function oddLengths(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 == 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
