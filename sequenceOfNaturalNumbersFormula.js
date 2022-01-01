const sequenceOfNaturalNumbers = (number) => {
  number = Math.abs(number);
  let sequence = (1 / 2) * number * (number + 1);
  console.log(`The sequence of natural numbers up to ${number} is ${sequence}`);
};

// O(1)
sequenceOfNaturalNumbers(2);
sequenceOfNaturalNumbers(3);
sequenceOfNaturalNumbers(4);
sequenceOfNaturalNumbers(5);
