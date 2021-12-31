const sequenceOfNaturalNumbers = (n) => {
  Math.abs(n);
  let i = 1;
  let result = 0;
  while (i <= n) {
    result += i;
    i++;
  }
  console.log(`The sequence of natural numbers up to ${n} is ${result}`);
};
sequenceOfNaturalNumbers(2);
sequenceOfNaturalNumbers(3);
sequenceOfNaturalNumbers(4);
sequenceOfNaturalNumbers(5);
