let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = -1; // use this value when the array doesn't have the desired value

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break;
  }
}

console.log(indexOfFive);
