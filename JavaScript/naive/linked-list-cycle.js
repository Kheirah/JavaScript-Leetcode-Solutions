/**
 * Definition for singly-linked list.
 */
 function ListNode(val) {
    this.val = val;
    this.next = null;
 }
 
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    if (!head.next) {
        return false;
    }
    
    const cache = {};
    while(head.next) {
        if (cache[head.val] === head) {
            return true;
        } else {
            cache[head.val] = head;
            head = head.next;
        }
    }
    return false;
};
