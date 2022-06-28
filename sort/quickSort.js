const quickSort = (array, start, end) => {
  start = typeof start !== "number" ? 0 : start;
  end = typeof end !== "number" ? array.length - 1 : end;
  if (start >= end) {
    return;
  }

  let i = start;
  let j = end;
  let pivot = array[Math.floor((start + end) / 2)];
  while (i < j) {
    //找右边第一个小于等于pivot
    while (array[j] > pivot) {
      j--;
    }

    //找左边第一个大于等于pivot
    while (array[i] < pivot) {
      i++;
    }
    if (i <= j) {
      //等于是数组有序的情况下避免死循环
      [array[i], array[j]] = [array[j], array[i]];
      i++;
      j--;
    }
  }
  //i与j相等时，如果array[i]<pivot就i++;保证左边都小于pivot，右边都大于pivot
  if (i === j && array[i] < pivot) {
    i++;
  }

  quickSort(array, start, i - 1);
  quickSort(array, i, end);
};
const items = [-1, 2, -8, -10];
const result = quickSort(items);
console.log(result);

/**
 * 快排最好的情况每次正好中分O(nlogn)
 * 最差情况
 *  1.已经排列好，并且pivot从第一个数开始，O(n^2)，退化成冒泡排序
 */
const quickSort1 = (array) => {
  if (!array.length) {
    return array;
  }
  const left = [];
  const right = [];
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];
  for (let i = 0; i < array.length; i++) {
    if (i !== pivotIndex) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  }
  return [...quickSort1(left), pivot, ...quickSort1(right)];
};
