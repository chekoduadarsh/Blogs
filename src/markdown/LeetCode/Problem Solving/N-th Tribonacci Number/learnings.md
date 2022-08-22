#  N-th Tribonacci Number
https://leetcode.com/problems/n-th-tribonacci-number/

```python
class Solution:
    def tribonacci(self, n: int) -> int:
        one, two, three  = 0, 1,  1
        for i in range(n-2):
            tmp = one
            one = one + two + three 
            three = two
            two = 1 if tmp==0 else tmp 
        return 1 if n == 1 or n == 2 else one

```

## Learnings
1. Same ad fib but add one more number to save and exception for first two conditins