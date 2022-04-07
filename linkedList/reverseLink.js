/*
* 反转链表
*
* */


//迭代法
const reverseLink = (head) => {
    if (!head) {
        return head;
    }

    let pre = null;
    let cur = head;

    while (cur) {
        const temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}
//递归法
const reverseLinkRecursive = (head) => {
    if (head === null || head.next === null) {
        return head;
    }

    const headNew = reverseLinkRecursive(head.next);
    head.next.next = head;
    head.next = null;
    return headNew

}


module.exports = reverseLink;