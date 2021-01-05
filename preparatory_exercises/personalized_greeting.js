let rlSync = require('readline-sync');
let firstName = rlSync.question("What's your first name? ");
let lastName = rlSync.question("What's your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);