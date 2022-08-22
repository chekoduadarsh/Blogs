# Add Two Numbers
https://leetcode.com/problems/add-two-numbers/
```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        
        a = l1.val
        b = l2.val
        carry = 0
        output=ListNode(0)
        result_tail=output
        while a != None and b != None:
            sum  = a+b+carry
            if sum >= 10:
                result_tail.next=ListNode(sum%10)
                result_tail=result_tail.next
                carry = 1
            else:
                result_tail.next=ListNode(sum)
                result_tail=result_tail.next
                carry = 0          
            l1 = l1.next
            l2 = l2.next
            if l1 is None and l2 is None:
                break
            if l1 is None:
                l1 = ListNode(0)
            
            if l2 is None:
                l2 = ListNode(0)
            
            a = l1.val
            b = l2.val
        if carry != 0:
            result_tail.next = ListNode(carry)
            result_tail=result_tail.next
        
        
        return (output.next)
```

## Learnings
1. learn OOPs on Python!!
2. Some times simplest answer is the best
3. Normall carry and sum math!!