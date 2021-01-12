// Count the number of elements in scores that are 100 or above.
let scores = [96, 47, 113, 89, 100, 102];

let count = 0;
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 100) {
    // bucket += scores[i];
    count += 1;
  } else {
    console.log("Number not > 100");
  }
}

console.log(`There are ${count} elements that are 100 or above.`);
