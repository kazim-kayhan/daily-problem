const factorial = (number) => {
  number = Math.abs(number);
  if (number == 1 || number == 0) return 1;
  return number * factorial(number - 1);
};
// O(n2)
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
