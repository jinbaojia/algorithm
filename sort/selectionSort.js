const selectionSort = (array) => {
  if (array.length === 0) return array;
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    [array[i], array[min]] = [array[min], array[i]];
  }

  return array;
};
console.log(selectionSort([1, 2, 5, 2, 376, 423, 78, 2]));
/*
  选择排序，数组长度为N
  需要进行N次交换，每次交换需要对比N-1-i 次
  所以 总对此次数是 (n-1) + (n-2) + (n-3) + ... + 2 + 1 + 0 = ((n-1)+0)n/2 ~ n^2/2 = O(n^2)
*/
