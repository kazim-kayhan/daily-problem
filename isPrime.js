function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Best Case: number = 1 OR number = 2 => O(1)
// Average Case: O(n)
// Worst Case: number = 27,277 => O(n)

console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(9));
console.log(isPrime(27277));
