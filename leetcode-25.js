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
var reverseKGroup = function(head, k) {
    if(!head || k < 2) return head;
    let count = 0;
    let now = head;
    let last = head;
    let tmp = null;

    while (now && count < k) {
        now = now.next;
        count ++;
    }

    if(count === k ){
        now = reverseKGroup(now, k);
        while ( count-- > 0 ){
            tmp = last.next;
            last.next = now;
            now = last;
            last = tmp;
        }
        last = now;
    }
    return last;
};