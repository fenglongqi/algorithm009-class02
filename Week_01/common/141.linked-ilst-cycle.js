/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let flag = false
    if (!head || !head.next) {
        return flag
    }
    let first = head
    let second = head.next.next
    while (first && second) {
        if (first === second) {
            flag = true;
            break
        }
        first = first.next
        if (second.next && second.next.next) {
            second = second.next.next
        } else {
            break
        }
        
    }

    return flag
};