//二分查找,只适合有序数组 O(lgn+1)

//初级版本，查找某个一定存在的元素,但是对于[1,2,2,2,3]这样的数组，如果搜索2，并不能得到，左右边界的2的索引
const binSearch = (array, data) => {
  let upperBound = array.length - 1;
  let lowerBound = 0;
  while (lowerBound <= upperBound) {
    const mid = Math.floor(lowerBound + (upperBound - lowerBound) / 2);
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
  const mid = Math.floor(lo + (hi - lo) / 2);
  if (array[mid] > data) {
    return recursiveBinSearch(array, data, lo, mid - 1);
  } else if (array[mid] < data) {
    return recursiveBinSearch(array, data, mid + 1, hi);
  } else {
    return mid;
  }
};

/**
 * 寻找左侧边界的二分搜索
 */
const binSearch2 = (array, data) => {
  if (array === null || array.length === 0) {
    return -1;
  }

  let left = 0;
  let right = array.length;
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (array[mid] === data) {
      right = mid; //重点
    } else if (array[mid] < data) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (left != array.length && array[left] == data) return left; //当left+1 === right时，不会进入循环，所以要判断
  return -1;
};

/**
 * 寻找右侧边界的二分搜索
 * findClosestElements 是此版本的应用
 */
const binSearch3 = (array, data) => {
  if (array === null || array.length === 0) {
    return -1;
  }

  let left = 0;
  let right = array.length;
  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (array[mid] === data) {
      left = mid + 1; //重点
    } else if (array[mid] < data) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return array[left - 1] === data ? left - 1 : -1;
};

/**
 *
 * 第四个版本可以在匹配中是，找到临近匹配值的左右节点 [1,1,1,10,10,10] 匹配1 时，得到[1,1,10]
 *
 * 实现二分查找的另一种方法。
 *搜索条件需要访问元素的直接左右邻居。
 *使用元素的邻居来确定它是向右还是向左。
 *保证查找空间在每个步骤中至少有 3 个元素。
 *需要进行后处理。 当剩下 2 个元素时，循环 / 递归结束。 需要评估其余元素是否符合条件
 * @param {*} array
 * @param {*} data
 */
const binSearch4 = (array, data) => {
  if (array === null || array.length === 0) {
    return -1;
  }
  let left = 0;
  let right = array.length - 1;
  while (left + 1 < right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (array[mid] == data) {
      return mid;
    } else if (array[mid] < data) {
      left = mid;
    } else {
      right = mid;
    }
  }
  if (nums[left] == data) return left;
  if (nums[right] == data) return right;
};

const list = [1, 2, 2, 2, 3];
console.log(binSearch4(list, 2));
