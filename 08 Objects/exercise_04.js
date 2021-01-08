/*
Create an array from the keys of the object obj below, with all
of the keys converted to uppercase. Your implementation must not mutate obj.
*/
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// store keys first into var
let objKeys = Object.keys(obj);

// use Object.keys() combined with map() to extract and uppercase the keys into an array.
let upperKeys = objKeys.map((key) => key.toUpperCase());
console.log(upperKeys);
console.log(obj);
