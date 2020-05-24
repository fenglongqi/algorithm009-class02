# 学习笔记


本周学习了数组、链表、栈、队列、优先队列、双端队列

有些数据结构是第一次接触，学习了一些使用方面的技巧



```
    // 比如栈相关的题目,可以先创建一个对象，然后将需要的返回对象只想 dummy.next中
    var dummy = new ListNode(-1)
    return dummy.next
```

```
    // 在移动零的题目中, 将移动完下标后面的元素设置为0
    for (let j = zeroIndex; j < nums.length; j++) {
        nums[j] = 0
    }
```


```
    // 在判断是否有环形链表的题目中使用快慢指针，
    // 在环状链表2题目中，根据在判断是否是环装两边的基础上，根据慢指针的移动距离是快指针的1/2的特点，找到环形开始的位置
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
```

```
    // 旋转数组中根据当前位置和数组长度取模来确定下一个要移动的位置，是很奇妙的思路
    do {
        let next = (current + k) % nums.length;
        let temp = nums[next]
        nums[next] = prev
        prev = temp
        current = next
        count++
    } while (start != current)
```


队列和栈相关的题目没有做很多，也是时间有限，之后会继续做然后总结的。