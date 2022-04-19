//https://leetcode-cn.com/problems/find-the-duplicate-number/
//287
//给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
//假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
//你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
//https://leetcode-cn.com/problems/find-the-duplicate-number/solution/by-longluo-e315/
//set 时间O(n) 空间O(n)
const findDuplicateWithSet = function (nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (set.has(element)) {
      return element;
    } else {
      set.add(element);
    }
  }
};

//===================不需要额外空间，需要改变数组============
//标记法 时间O(n) 空间O(1)
const findDuplicate_mark = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]);
    if (nums[index] < 0) {
      return index;
    }
    nums[index] = -nums[index];
  }
};
//索引排序 时间O(n) 空间O(1)
/**
 * 对于一个长度为n,并且取值在[1,n]的数组来说，如果这个数组是有序且不重复的，那么数组下标i+1 === nums[i]
 * 题目给的数组乱序，并且有重复，已经可以用上面的结论
 * @param {Array} nums
 * @returns
 */
const findDuplicate_index_sort = (nums) => {
  const len = nums.length;
  let i = 0;
  while (i < len) {
    let n = nums[i];
    if (n === i + 1) {
      //这个元素是有序的
      i++;
    } else if (n === nums[n - 1]) {
      //这个元素没有在自己的位置上，它应该在的位置的下标是n-1;查看n-1位置的元素值，如果等于n，就说名找到了重复项
      return n;
    } else {
      //将i位置的元素放到它应该在的位置，就是n-1,将n-1位置的元素放到i,
      nums[i] = nums[n - 1];
      nums[n - 1] = n;
    }
  }
  return 0;
};

//二分
const findDuplicateWithBinSearch = function (nums) {
  const n = nums.length;
  let l = 1;
  let r = n - 1;
  let ans = -1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let cnt = 0;
    for (let i = 0; i < n; ++i) {
      cnt += nums[i] <= mid;
    }
    if (cnt <= mid) {
      l = mid + 1;
    } else {
      r = mid - 1;
      ans = mid;
    }
  }
  return ans;
};
console.log(findDuplicate_index_sort([1, 3, 4, 2, 2]));
