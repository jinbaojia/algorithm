//https://leetcode-cn.com/problems/find-the-duplicate-number/
//287
//给定一个包n + 1 个整数的数组nums ，其数字都在[1, n]范围内（包括 1 和 n），可知至少存在一个重复的整数。
//假设 nums 只有 一个重复的整数 ，返回这个重复的数 。
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

/**
 * ===============不适用额外空间，不需要改变数组=========
 */

/**
 * 二分法，不是常规解法，时间换空间，
 * 时间O(nlogn) 空间O(1)
 * 有[1-n]个抽屉，放[1-n+1]个苹果，如果1号抽屉放1号苹果，就必定有一个抽屉多放一个或多个苹果;
 * 此时用二分法查找抽屉mid,此时遍历整个数组，找小于等于mid的数的总数cnt(苹果总数);
 * 如果cnt大于mid,则说明，在[left-mid]这个区间里有一个抽屉多方了苹果；
 * 如果cnt小于等于mid,则说明没有，应该在[mid+1,right]里继续二分
 */
const findDuplicateWithBinSearch = function (nums) {
  let left = 1;
  const length = nums.length;
  let right = length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    let cnt = 0;
    for (let i = 0; i < length; i++) {
      if (nums[i] <= mid) {
        cnt++;
      }
    }

    if (cnt > mid) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

/**
 * 快慢指针
 */
const findDuplicate_fastSlow = (nums) => {
  let slow = 0,
    fast = 0;
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow != fast);
  slow = 0;
  while (slow != fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
};
console.log(findDuplicate_fastSlow([1, 3, 4, 2, 2]));
// 1,5,3,2,4,3
