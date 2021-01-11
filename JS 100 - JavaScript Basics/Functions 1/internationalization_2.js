/*
Building on your solutions from the previous exercises, write a function
localGreet that takes a locale as input, and returns a greeting. The locale
allows us to greet people from different countries differently also when they
share the language, for example:
*/
function greet(languageCode) {
  switch (languageCode) {
    case "en":
      console.log("Hey!");
      break;
    case "fr":
      console.log("Salut!");
      break;
    case "af":
      console.log("Haai!");
      break;
    default:
      console.log("Type in a proper locale, please.");
  }
}

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale.split('.')[0].split('_')[1];
}

greet('en_US.UTF-8'); // 'Hey!'
greet('en_GB.UTF-8'); // 'Hello!'
greet('en_AU.UTF-8'); // 'Howdy!'
