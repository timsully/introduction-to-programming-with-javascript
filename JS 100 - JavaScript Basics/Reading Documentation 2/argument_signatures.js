/*
How many arguments does the Array.prototype.join() method expect? What happens
if you call it with less or more arguments?

The array method `join()` concatenates all elements of an array into a string.
It expects a single, optional argument: a string that will be used as separator.
If the argument is omitted, the separator defaults to `,`. Any excess arguments
passed to the method upon invocation are ignored.
*/

// Examples
let array = ['Bob', 'Kevin', 'Stuart'];

// separator argument omitted
array.join();                  // 'Bob,Kevin,Stuart'

// single separator argument
array.join(', ');              // 'Bob, Kevin, Stuart'

// excess argument passed in
array.join(' and ', 'also');   // 'Bob and Kevin and Stuart'
