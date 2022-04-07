/* 
  合并两个有序链表，
*/

const {ListNode} = require("../Link");
const mergeTwoOrderedLink = (head1, head2) => {
    const dummyHead = new ListNode();
    let temp = dummyHead;
    let temp1 = head1;
    let temp2 = head2;
    while (temp2 && temp1) {
        if (temp1.val >= temp2.val) {
            temp.next = temp2;
            temp2 = temp2.next;
        } else {
            temp.next = temp1;
            temp1 = temp1.next;
        }
        temp = temp.next;
    }

    temp.next = temp1 || temp2;
    return dummyHead.next;
};

//递归
const recursiveMerge = (head1, head2) => {
    if (head1 === null) {
        return head2;
    } else if (head2 === null) {
        return head1;
    } else if (head1.val < head2.val) {
        head1.next = recursiveMerge(head1.next, head2);
        return head1;
    } else {
        head2.next = recursiveMerge(head1, head2.next);
        return head2;
    }
};

module.exports = mergeTwoOrderedLink;