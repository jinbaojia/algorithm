const insertionSort = (array) => {
  if (array.length === 0) return array;
  var len = array.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = array[i];
    while (preIndex >= 0 && array[preIndex] > current) {
      array[preIndex + 1] = array[preIndex];
      preIndex--;
    }
    array[preIndex + 1] = current;
  }
  return array;
};

// console.log(insertionSort([1, 2, 44, 23, 66, 23, 8, 2, 567, 34, 745]));

/*
  适合大部分数据已经有序的数组
  插入排序，数组长度为n
  最好情况，数组是有序的，比较次数为 n-1 时间复杂度：O(n)
  最坏情况，数组是逆序的，比较次数为 1 + 2 + 3 + ... + (n-1) =(n^2-n)/2 ~ O(n^2/2)
  平均情况 O(n^2/4)
*/

const insertSortByBinSearch = (array) => array.reduce(insert, []);
const insert = (sortedArray, value) => {
  const len = sortedArray.length;
  if (len === 0) {
    sortedArray.push(value);
    return sortedArray;
  }

  if (value >= sortedArray[len - 1]) {
    sortedArray.push(value);
    return sortedArray;
  }

  if (value <= sortedArray[0]) {
    sortedArray.unshift(value);
    return sortedArray;
  }

  let i = 0;
  let j = len;
  while (i < j) {
    const mid = Math.floor(i + (j - i) / 2);
    if (value === sortedArray[mid]) {
      i = mid + 1;
    } else if (value > sortedArray[mid]) {
      i = mid + 1;
    } else {
      j = mid;
    }
  }

  sortedArray.splice(i, 0, value);
  return sortedArray;
};
