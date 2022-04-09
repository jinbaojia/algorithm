//二分查找,只适合有序数组 O(lgn+1)

//初级版本，查找某个一定存在的元素
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

/**
 * 高级版本，查找每个元素的插入位置
 * @param {*} array
 * @param {*} data
 * @returns
 */
const HiBinSearch = (array, data) => {
  if (array === null || array.length === 0) {
    return -1;
  }

  let left = 0;
  let right = array.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === data) {
      return mid;
    } else if (array[mid] < data) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (left != array.length && array[left] == target) return left;//当left+1 === right时，不会进入循环，所以要判断
  return -1;
};

const list = [1, 2, 3, 4, 5];
console.log(HiBinSearch(list, 2));
