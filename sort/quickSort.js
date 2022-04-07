const partition = (array, left, right) => {
  /**
   * 有许多方法可以计算基准值。
   * 一些算法选择第一个数作为基准值。这不是最好的选择，
   * 因为它在已经排序的数组上给出了最差的性能(O(n^2)的时间复杂度，而平均时间复杂度是O(nlogn))。
   * 最好在数组中间选择一个基准值
   */
  const pivot = array[Math.floor((right + left) / 2)];
  //这里的等于是因为，不能确定left === right 时的值 是大于还是小于基准值，所以走后门的逻辑让left++;
  //让left和right相等时的值放在左边，也就是按小于基准值的情况
  while (left <= right) {
    while (array[left] < pivot) {
      //不是array[left] <= pivot 是为了防止数组中的值全都大于等于或者小于等于pivot
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      //这里的等于是为了 数组是有序的，如果没有等于，有序的数组将会死循环
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
};
const quickSort = (array, left, right) => {
  if (array.length === 0) {
    return array;
  }
  typeof left !== "number" && (left = 0);
  typeof right !== "number" && (right = array.length - 1);

  const index = partition(array, left, right);
  if (left < index - 1) {
    quickSort(array, left, index - 1);
  }
  if (index < right) {
    quickSort(array, index, right);
  }

  return array;
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
