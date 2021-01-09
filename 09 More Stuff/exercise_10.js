// Consider this code
let x = "5"
x = x + 1
// => "51"

// Now, consider this code. What gets returned by y++ in the second snippet, and why?
let y = "5";
y++
// => 5

// The return value is the numeric value 5. If you apply `++` to a string, JavaScript
// coerces it into a number. In this case, "5" gets coerced to the number 5. After
// coercion, it then increments the value to 6. However, the return value is 5 since
// the post-increment operator (y++) returns the original valueof y, not the incremented value
