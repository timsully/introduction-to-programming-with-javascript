let names = ["bob", "joe", "steve", undefined, "frank"];

names.forEach((name) => {
  try {
    console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch (exception) {
    console.log("Something went wrong");
  }
}); // => bob's name has 3 letters in it.
//    joe's name has 3 letters in it.
//    steve's name has 5 letters in it.
//    Something went wrong
//    frank's name has 5 letters in it.
