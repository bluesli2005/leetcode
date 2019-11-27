/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let start = new ListNode(null);
    start.next = head;
    let len = 0,
        current = null,
        del = null;
    if(head === null){
        len = 0;
    }else{
        current = head;
        len = 1;
        while(current.next){
            len++;
        }
    }
    let position = len - n;
    if(position > -1 && position < len){
        current = head;
        let previous,
            index = 0;
        // 移除第一项
        if(position === 0){
            head = current.next;
        }else{
            while(index < position){
                previous = current;
                current = current.next;
                index++;
            }
            del = current;
            previous.next = current.next;
        }
        len--;
        return start.next;
    }else{
        return null;
    }
};