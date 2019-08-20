/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if( head === null || k === 0) return head
    let dummy = new ListNode(-1)
    dummy.next = head
    let pre = head
    let count = 1
    while(pre.next !== null){
        count++
        pre = pre.next
    }

    pre.next = head
    k = count - k % count

    while (k > 0){
        pre = pre.next
        k--
    }

    head = pre.next
    pre.next = null
    return head

};