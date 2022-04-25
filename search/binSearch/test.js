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

const findMedianSortedArrays_Pointer = function (nums1, nums2) {
  const nums1Len = nums1.length - 1;
  const nums2Len = nums2.length - 1;
  let p1 = 0;
  let p2 = 0;
  const midNum = (nums1Len + nums2Len + 1) / 2;
  const mid = Math.floor(midNum);
  let i = 1;
  while (i <= mid) {
    if (p1 >= nums1Len) {
      p2++;
    } else if (p2 >= nums2Len) {
      p1++;
    } else {
      const n1 = nums1[p1];
      const n2 = nums2[p2];
      if (n1 > n2) {
        p2++;
      } else {
        p1++;
      }
    }
    i++;
  }

  if (mid === midNum) {
    if (p1 >= nums1Len) {
      return nums2[p2];
    }
    if (p2 >= nums2Len) {
      return nums1[p1];
    }

    if (nums1[p1] > nums2[p2]) {
      return nums1[p1];
    } else {
      return nums2[p2];
    }
  } else {
    if (p1 >= nums1Len) {
      return (nums2[p2] + nums2[p2 + 1]) / 2;
    }
    if (p2 > nums2Len) {
      return (nums2[p1] + nums2[p1 + 1]) / 2;
    }
    return (nums1[p1] + nums2[p2]) / 2;
  }
};

console.log(findMedianSortedArrays_Pointer([1, 5], [2, 6]));
