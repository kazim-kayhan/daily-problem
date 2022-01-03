const searchInsert = (numbers, target) => {
  let firstIndex = 0;
  let lastIndex = numbers.length - 1;
  while (firstIndex <= lastIndex) {
    const middleIndex = firstIndex + Math.floor((lastIndex - firstIndex) / 2);
    if (numbers[middleIndex] == target) return middleIndex;
    else if (numbers[middleIndex] < target) firstIndex = middleIndex + 1;
    else lastIndex = middleIndex - 1;
  }
  return lastIndex + 1; // Return insert position
};

// const searchInsert = (numbers, target) => {
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] == target) return i;
//     else if (numbers[i] > target) return i;
//   }
//   return numbers.length;
// };

let arr = [1, 3, 5, 6];
let target = 2;
console.log(searchInsert(arr, target));
