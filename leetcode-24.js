/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if(head == null || head.next == null ) return head;
    let prev = head;
    let cur = head.next;

    while(prev != null && cur != null ){
        let temp = prev.val;
        prev.val = cur.val;
        cur.val = temp;

        if(cur.next == null || cur.next.next == null) break;

        prev = cur.next;
        cur = cur.next.next;
    }
    
    return head;
}