/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    let dummy = new ListNode()
    let first = l1, second = l2, pre = dummy
    while(first !== null && second !== null) {
        if (first > second) {
            pre.next = second
            second = second.next  
        } else {
            pre.next = first
            first = first.next
            
        }

        pre = pre.next
    }
    pre.next = first === null ? second : first;
    return dummy.next
};