var insertionSortList = function (head) {
  if (!head) {
    return null;
  }

  const dummyHead = new ListNode(0, head);
  let tmp = head.next;
  let latestNode = head;
  while (tmp) {
    if (latestNode.val <= tmp.val) {
      tmp = tmp.next;
      latestNode = latestNode.next;
    } else {
      let node = dummyHead;
      while (node.next && node !== latestNode) {
        if (node.next.val >= tmp.val) {
          latestNode.next = tmp.next;
          const next = node.next;
          node.next = tmp;
          tmp.next = next;
          tmp = latestNode.next;
          break;
        }
        node = node.next;
      }
    }
  }
  return dummyHead.next;
};