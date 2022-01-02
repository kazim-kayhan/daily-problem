function binarySearch(sortedArr, target) {
  if(sortedArr[target])
  let left = 0;
  let right = sortedArr.length - 1;

  while (left <= right) {
    const pivot = left + Math.floor((right - left) / 2);

    if (target === sortedArr[pivot]) {
      return pivot;
    }

    if (sortedArr[pivot] < target) {
      left = pivot + 1;
    } else {
      right = pivot - 1;
    }
  }
  return -1;
}

const arr = [1, 5, 9, 13, 99, 100];

console.log(binarySearch(arr, 9));