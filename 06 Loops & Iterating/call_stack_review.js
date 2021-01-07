function first() {
  console.log("first function");
}

function second() {
  first();
  console.log("second function");
}

second();
console.log("main function");
