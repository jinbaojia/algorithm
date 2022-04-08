//二分查找,只适合有序数组 O(lgn+1)
const binSearch = (array, data) => {
  let upperBound = array.length - 1;
  let lowerBound = 0;
  while (lowerBound <= upperBound) {
    const mid = Math.floor((lowerBound + upperBound) / 2);
    if (array[mid] < data) {
      lowerBound = mid + 1;
    } else if (array[mid] > data) {
      lowerBound = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
};
const recursiveBinSearch = (array, data, lo, hi) => {
  if (lo > hi) {
    return -1;
  }
  lo === undefined && (lo = 0);
  hi === undefined && (hi = array.length - 1);
  const mid = Math.floor((lo + hi) / 2);
  if (array[mid] > data) {
    return recursiveBinSearch(array, data, lo, mid - 1);
  } else if (array[mid] < data) {
    return recursiveBinSearch(array, data, mid + 1, hi);
  } else {
    return mid;
  }
};
const list = [1, 2, 3, 4, 5];
console.log(recursiveBinSearch(list, 4));
