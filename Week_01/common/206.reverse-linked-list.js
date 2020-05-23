var reverseList = function(head) {
    if(!head || !head.next) return head
    var prev = null, curr = head
    while(curr) {
        // 用于临时存储 curr 后继节点
        var next = curr.next
        // 反转 curr 的后继指针
        curr.next = prev
        // 变更prev、curr 
        // 待反转节点指向下一个节点 
        prev = curr
        curr = next
    }
    head = prev
    return head
};

var reverseList = function(head) {
    if (!head || !head.next) return head

    var curr = reverseList(head.next)

    head.next.next = head
    head.next = null
    return curr
};