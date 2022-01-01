function isPowerOfTwo(number) {
  number = Math.abs(number);
  if (number === 0) return false;
  return (number & (number - 1)) === 0;
}

// O(1)

console.log(isPowerOfTwo(0));
console.log(isPowerOfTwo(-8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(20));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(13));
