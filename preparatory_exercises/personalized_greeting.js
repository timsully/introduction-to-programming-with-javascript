function getName(prompt) {
  let readlineSync= requrie('readline-sync');
  let name = readlineSync.question(prompt);
  return name;
}

let firstName = getName("What's your first name? ");
let lastName = getName("What's your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);