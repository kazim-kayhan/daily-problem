function isPrime(number) {
  number = Math.abs(number);
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  let count = 5;
  while (Math.pow(count, 2) <= number) {
    if (number % count === 0 || number % (count + 2) === 0) return false;
    count += 6;
  }
  return true;
}

console.log(isPrime(19));
console.log(isPrime(23));
console.log(isPrime(27277));
