/*
What will the following code log to the console and why?
Don't run it until you have tried to answer.

{ firstName: 'Jane', lastName: 'Doe' }
*/
const a = {
  firstName: "John",
  lastName: "Doe",
};

function myFunction() {
  a.firstName = "Jane";
}

myFunction();

console.log(a);
