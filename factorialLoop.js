const factorial = (number) => {
  number = Math.abs(number);
  let i = 1;
  let result = 1;
  while (i <= number) {
    result = result * i;
    i++;
  }
  console.log(`The factorial of ${number} is ${result}`);
};
// O(n)
factorial(0);
factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);
