function fibonacci(number) {
  if (number < 2) return number; // 0 if number is 0, 1 if number is 1
  console.log(number);
  return fibonacci(number - 1) + fibonacci(number - 2);
}


console.log(fibonacci(5));
