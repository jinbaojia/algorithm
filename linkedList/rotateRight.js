/*
* 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
* 61.旋转链表
* */

const reverseLink = require("./reverseLink")
const rotateRight = (head, k) => {
    if (!head || !k) {
        return head;
    }
    let len = 0;
    let temp = head;
    while (temp) {
        len++;
        temp = temp.next;
    }
    const headNew = reverseLink(head);
    const kNew = k % len;
    if (!kNew) {
        return head;
    }
    let i = 1;
    temp = headNew;
    while (temp) {
        if (i === kNew) {
            let endHalf = reverseLink(temp.next);
            temp.next = null;
            let startHalf = reverseLink(headNew);
            temp.next = endHalf;
            return startHalf;
        }
        temp = temp.next;
        i++;
    }
}