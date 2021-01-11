/*
What will the following code log to the console and why?
Don't run it until you have tried to answer.

ReferenceError: Cannot access 'a' before initialization
*/
function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();
