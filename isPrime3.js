function isPrime(number) {
  number = Math.abs(number);
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;
  for (let i = 5; i < Math.sqrt(number) + 1; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Best Case: number = 1 OR number = 2 => O(1)
// Average Case: O(n) (Improved: O(sqrt(n)))
// Worst Case: number = 27,277 => O(n) (Improved: O(sqrt(n)))

console.log(isPrime(27277));
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(5));
console.log(isPrime(13));
