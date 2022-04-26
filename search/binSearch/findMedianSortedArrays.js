// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
// 算法的时间复杂度应该为 O(log (m+n)) 。
//https://leetcode-cn.com/leetbook/read/binary-search/xe6jas/
//4

//合并两个有序数组，得到一个大的有序数组。大的有序数组的中间位置的元素，即为中位数 时间O(n+m) 空间O(n+m)
const findMedianSortedArrays_Array_Sort = function(nums1, nums2) {
  const _nums = [...nums1, ...nums2].sort((a, b) => a - b);
  let mid = (_nums.length - 1) / 2;
  if (mid === Math.floor(mid)) {
    return _nums[mid];
  } else {
    mid = Math.floor(mid);
    return (_nums[mid] + _nums[mid + 1]) / 2;
  }
};

//不需要合并两个有序数组，只要找到中位数的位置即可。
//由于两个数组的长度已知，因此中位数对应的两个数组的下标之和也是已知的。
//维护两个指针，初始时分别指向两个数组的下标 00 的位置，每次将指向较小值的指针后移一位
//（如果一个指针已经到达数组末尾，则只需要移动另一个数组的指针），直到到达中位数的位置。

const findMedianSortedArrays = function(nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let p1 = 0;
  let p2 = 0;
  let preVal = -1;
  let curVal = -1;

  const len = len1 + len2;
  let mid = Math.floor(len / 2);
  while (mid >= 0) {
    preVal = curVal;
    if (p1 < len1 && (p2 >= len2 || nums1[p1] < nums2[p2])) {
      curVal = nums1[p1];
      p1++;
    } else {
      curVal = nums2[p2];
      p2++;
    }
    mid--;
  }
  if (len % 2 === 0) {
    return (curVal + preVal) / 2;
  }
  return curVal;

};

console.log(findMedianSortedArrays([1, 5], [2, 6]));
