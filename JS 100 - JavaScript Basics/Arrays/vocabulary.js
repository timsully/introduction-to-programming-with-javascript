/*
We've been given an array of vocabulary words grouped into sub-arrays
by meaning. This is a two-dimensional array or a nested array. Write
some code that iterates through the sub-arrays and logs each vocabulary
word to the console.
*/
let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

// for (let i = 0; i < vocabulary.length - 2; i++) {
//   // console.log(i);
//   for (let j = 0; j < vocabulary[i].length; j++) {
//     let bucket = [];
//     bucket += vocabulary[j];
//     console.log(bucket);
//   }
// }


for (let vocabularyIdx = 0; vocabularyIdx < vocabulary.length; vocabularyIdx++) {
  let synonyms = vocabulary[vocabularyIdx];

  for (let synonymIdx = 0; synonymIdx < synonyms.length; synonymIdx++) {
    console.log(synonyms[synonymIdx]);
  }
}
