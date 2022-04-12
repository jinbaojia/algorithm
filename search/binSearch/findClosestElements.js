/**
 * 找到 K 个最接近的元素
 * 给定一个 排序好 的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
 * 整数 a 比整数 b 更接近 x 需要满足：
 *|a - x| < |b - x| 或者
 *|a - x| == |b - x| 且 a < b
 * @param {*} arr
 * @param {*} k
 * @param {*} x
 */

 function findClosestElements(arr, k, x) {
  // 左边界的起始终止点
  let left = 0;
  let right = arr.length - k;

  while (left < right) {
      let mid = (left + right) >>> 1;
      if (x - arr[mid] > arr[mid + k] - x) {
          // 如果左边界点与x的差值 > 右边界点与x的差值 —> 向右侧靠近
          left = mid + 1;
      } else {
          right = mid;
      }
  }

  return arr.slice(left, left + k);
};
console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9));
