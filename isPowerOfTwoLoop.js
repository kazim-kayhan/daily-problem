function isPowerOfTwo(number) {
  number = Math.abs(number);
  let dividend = number;
  while (dividend !== 1) {
    if (dividend === 0 || dividend % 2 !== 0) return false;
    dividend /= 2;
  }
  return true;
}

// Best Case: number is prime = 13 => O(1)
// Average Case: O(log n)
// Worst Case: 1,000,000 => O(log n)

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));
