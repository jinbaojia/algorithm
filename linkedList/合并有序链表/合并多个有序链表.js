/*
* 给定一个链表数组，每个链表都已经按升序排列。
*请将所有链表合并到一个升序链表中，返回合并后的链表。
* leetCode 23
* */

/*
* 假设lists长度为k,每个链表长度为n
* */
const mergeTwoOrderedLink = require("./orderedLinkedList");
/*
* 依次合并链表
* 第一次合并为2n,第二次为3n，共有k-1次合并，每次合并 （k+1)n,时间复杂度O(k^2n)
* 空间复杂度O(1);
* */
const mergeKLists = (lists) => {
    if (!lists.length || lists.length === 1) {
        return null;
    }
    let dummyHead = lists[0];
    for (let i = 1; i < lists.length; i++) {
        dummyHead = mergeTwoOrderedLink(dummyHead, lists[i]);
    }
    return dummyHead
}


/*
* 分治合并
*
* */
//todo 使用归并排序，分自顶向下和自底而上合并
//https://leetcode-cn.com/problems/merge-k-sorted-lists/solution/23-he-bing-kge-sheng-xu-lian-biao-by-che-a4aw/
