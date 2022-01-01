const sequenceOfNaturalNumbers = (number) => {
  number = Math.abs(number);
  let result = 0;
  for (let i = 0; i <= number; i++) {
    result += i;
  }
  console.log(`The sequence of natural numbers up to ${number} is ${result}`);
};
// O(n)
sequenceOfNaturalNumbers(2);
sequenceOfNaturalNumbers(3);
sequenceOfNaturalNumbers(4);
sequenceOfNaturalNumbers(5);
