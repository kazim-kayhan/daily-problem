const factorial = (n) => {
  n = Math.abs(n);
  if (n == 1 || n == 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(-5));
