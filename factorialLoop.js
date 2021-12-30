const factorial = (n) => {
  n = Math.abs(n);
  let i = 1;
  let result = 1;
  while (i <= n) {
    result = result * i;
    i++;
  }
  console.log(`The factorial of ${n} is ${result}`);
};
factorial(5);
