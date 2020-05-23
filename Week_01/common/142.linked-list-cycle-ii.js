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
var detectCycle = function(head) {

    if (!head || !head.next) {
        return null
    }

    let slow = head.next
    let fast = head.next.next

    while (slow && fast) {
        if (slow === fast) {
          slow = head
          while (slow != fast) {
              slow = slow.next
              fast = fast.next
          }  
          return slow
        }

        slow = slow.next
        if (fast.next) {
            fast = fast.next.next
        } else {
            return null
        }
        
    }

    return null
    
};