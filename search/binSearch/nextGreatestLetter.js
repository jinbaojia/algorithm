var nextGreatestLetter = function(letters, target) {
  const length = letters.length;
  if (target >= letters[length - 1]) {
      return letters[0];
  }
  let low = 0, high = length - 1;
  while (low < high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (letters[mid] > target) {
          high = mid;
      } else {
          low = mid + 1;
      }
  }
  return letters[low];
};
// 目标右侧边界的下一个值
// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/find-smallest-letter-greater-than-target/solution/xun-zhao-bi-mu-biao-zi-mu-da-de-zui-xiao-lhm7/
console.log(nextGreatestLetter(["c", "f", "j"], "g"));
