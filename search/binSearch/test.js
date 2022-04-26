// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
// 算法的时间复杂度应该为 O(log (m+n)) 。
//https://leetcode-cn.com/leetbook/read/binary-search/xe6jas/
//4

//合并两个有序数组，得到一个大的有序数组。大的有序数组的中间位置的元素，即为中位数 时间O(n+m) 空间O(n+m)
const findMedianSortedArrays_Array_Sort = function (nums1, nums2) {
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

var findMedianSortedArrays = function(nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;

  // 两个数组总长度
  let len = n1 + n2;

  // 保存当前移动的指针的值(在nums1或nums2移动)，和上一个值
  let preValue = -1;
  let curValue = -1;

  //  两个指针分别在nums1和nums2上移动
  let point1 = 0;
  let point2 = 0;

  // 需要遍历len/2次，当len是奇数时，最后取curValue的值，是偶数时，最后取(preValue + curValue)/2的值
  for (let i = 0; i <= Math.floor(len/2); i++) {
      preValue = curValue;
      // 需要在nums1上移动point1指针
      if (point1 < n1 && (point2 >= n2 || nums1[point1] < nums2[point2])) {
          curValue = nums1[point1];
          point1++;
      } else {
          curValue = nums2[point2];
          point2++;
      }
  }
  
  return len % 2 === 0 
      ? (preValue + curValue) / 2
      : curValue
};

console.log(findMedianSortedArrays([1, 5], [2, 6]));
