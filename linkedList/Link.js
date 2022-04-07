function ListNode(val, next) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
}


function DoublyLinkNode(val, pre, next) {
    if (val === "undefined") {
        val = null;
    }
    if (pre === "undefined") {
        pre = null;
    }
    if (next === "undefined") {
        next = null;
    }
}


const linkByArray = (array) => {
    if (array.length === 0) {
        return null;
    }
    const dummyHead = new ListNode();
    let head = dummyHead;
    for (let val of array) {
        head.next = new ListNode(val);
        head = head.next;
    }
    return dummyHead.next;
}
const arrayByLink = (head) => {
    if (!head) {
        return [];
    }
    const arr = [];
    while (head) {
        arr.push(head["val"]);
        head = head.next;
    }
    return arr;
}

module.exports.ListNode = ListNode;
module.exports.DoublyLinkNode = DoublyLinkNode;
module.exports.linkByArray = linkByArray;
module.exports.arrayByLink = arrayByLink;
