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
    if (!head || !head.next) return head
    var dummy = new ListNode(-1)
    var prenode = dummy
    while (head && head.next ) {
        let next = head.next

        prenode.next = next
        head.next = next.next
        next.next = head

        prenode = head
        head = head.next
    }
    return dummy.next
};