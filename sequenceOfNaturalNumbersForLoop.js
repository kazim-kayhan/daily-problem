const sequenceOfNaturalNumbers = (n) => {
  Math.abs(n);
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  console.log(`The sequence of natural numbers up to ${n} is ${result}`);
};
sequenceOfNaturalNumbers(2);
sequenceOfNaturalNumbers(3);
sequenceOfNaturalNumbers(4);
sequenceOfNaturalNumbers(5);
