const shellSort = (array) => {
  if (!array.length) {
    return array;
  }
  const len = array.length;
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < len; i++) {
      for (let j = i - gap; j >= 0 && array[j] > array[j + gap]; j -= gap) {
        [array[j], array[j + gap]] = [array[j + gap], array[j]];
      }
    }
  }
  return array;
};
const list = [23, 34, 1, 45, 67, 34, 4, 2, 56, 23, 6, 8, 45, 1, 45];
console.log(list.length);
console.log(shellSort(list));
