/*
We have made a grocery list, and as we check off items on that list,
we would like to remove them.

Write code that removes the items from 'groceryList' one by one, until
it is empty. If you log the elements you remove, the expected behavior
would look as follows.
*/
let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

while (groceryList.length > 0) {
  let checkedItem = groceryList.shift();

  console.log(checkedItem);
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []
