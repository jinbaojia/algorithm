/*
 * 回文链表
 * */
const { reverseLink } = require("./reverseLlink");
const endhalfLink = (head) => {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
//反转链表解法
const isPalindrome = (head) => {
  if (!head) {
    return true;
  }

  const endhalfNode = endhalfLink(head);
  const reverseHead = reverseLink(endhalfNode.next);
  let res = true;
  let dummyHead = reverseHead;
  while (head && dummyHead) {
    if (head.val !== dummyHead.val) {
      res = false;
      break;
    }
    head = head.next;
    dummyHead = dummyHead.next;
  }
  reverseLink(reverseHead);
  return res;
};
//将值复制到数组中后用双指针法
const isPalindromeByArray = (head) => {
  if (!head) {
    return true;
  }
  const array = [];
  while (head) {
    array.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    if (array[i] !== array[j]) {
      return false;
    }
  }
  return true;
};

//递归
let frontPoint;
const recursivelyCheck = (currentNode) => {
  if (currentNode) {
    if (!recursivelyCheck(currentNode.next)) {
      return false;
    }
    if (currentNode.val !== frontPoint.val) {
      return false;
    }
    frontPoint = frontPoint.next;
  }
  return true;
};
const isPalindromeRecursive = (head) => {
  frontPoint = head;
  return recursivelyCheck(head);
};
