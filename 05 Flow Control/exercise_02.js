/* 
Write a function, evenOrOdd, that determines whether its argument is an 
even number. If it is, the function should log 'even' to the console; otherwise,
it should log 'odd'. For now, assume that the argument is always an integer.
*/

function evenOrOdd(num) {

  if (!Number.isInteger(num)) {
    console.log("Sorry, the value you passed is not an integer");
    return;
  }

  if (num % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

evenOrOdd(2);
evenOrOdd('5');
