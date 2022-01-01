const sequenceOfNaturalNumbers = (number) => {
  number = Math.abs(number);
  let i = 1;
  let result = 0;
  while (i <= number) {
    result += i;
    i++;
  }
  console.log(`The sequence of natural numbers up to ${number} is ${result}`);
};
// O(n)
sequenceOfNaturalNumbers(2);
sequenceOfNaturalNumbers(3);
sequenceOfNaturalNumbers(4);
sequenceOfNaturalNumbers(5);
