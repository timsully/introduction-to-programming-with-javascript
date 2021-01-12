/*
How can you check whether a variable holds a value that is an array?
For example, imagine you start writing a function and want to check
whether its argument is an array:
*/
let someValue1 = [0, 1, 0, 0, 1];
let someValue2 = 'I leave you my Kingdom, take good care of it.';

Array.isArray(someValue1); // true
Array.isArray(someValue2); // false
