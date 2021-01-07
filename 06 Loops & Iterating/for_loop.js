let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];
let upperNames = [];

for (let index = 0; index < names.length; index += 1) {
  if (names[index] !== "Naveed") {
    let upperCaseName = names[index].toUpperCase();
    upperNames.push(upperCaseName);
  }
}

console.log(upperNames); // ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
