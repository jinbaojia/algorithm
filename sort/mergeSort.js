/**
 * 归并排序
 * 自顶向下
 * 时间复杂度O(nlogn)
 * 空间复杂度：O(n)。我们需要额外 O(n) 空间的 temp 数组，且归并排序递归调用的层数最深为 O(logn)，所需的空间复杂度即为 O(n+logn)=O(n)
 * */

const temp = [];
const merge = (array, start, mid, end) => {
  let i = start;
  let j = mid + 1;
  let n = 0;
  while (i <= mid && j <= end) {
    if (array[i] <= array[j]) {
      temp[n++] = array[i++];
    } else {
      temp[n++] = array[j++];
    }
  }
  while (i <= mid) {
    temp[n++] = array[i++];
  }
  while (j <= end) {
    temp[n++] = array[j++];
  }
  for (let i = 0; i < end - start + 1; ++i) {
    array[i + start] = temp[i];
  }
};
const sortArray = (array, start, end) => {
  if (start >= end) {
    return;
  }
  let mid = Math.floor((start + end) / 2);
  sortArray(array, start, mid);
  sortArray(array, mid + 1, end);
  merge(array, start, mid, end);
};
const recursiveMergeSort = (array) => {
  const len = array.length;
  if (!len) {
    return array;
  }
  sortArray(array, 0, len - 1);
  return array;
};
const arr1 = recursiveMergeSort([1, 23, 5, 67]);
console.log(arr1);

/**
 * 自底向上
 * */
const mergeSort = (array) => {
  let len = array.length;
  for (let i = 1; i < len; i *= 2) {
    for (let j = 0; j < len - i; j += i * 2) {
      merge(array, j, j + i - 1, Math.min(j + i + i - 1, len - 1));
    }
  }
  return array;
};

const arr = mergeSort([1, 23, 5, 67]);
console.log(arr);
