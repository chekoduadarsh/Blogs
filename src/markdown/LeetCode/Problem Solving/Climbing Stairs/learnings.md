# Climbing Stairs
https://leetcode.com/problems/climbing-stairs/

```python
class Solution:
    def climbStairs(self, n: int) -> int:
        one, two = 1, 1
        for i in range(n-1):
            temp = one
            one = one + two
            two = temp
            
        return one
```

This is quite challange looking simple problem. Answer is fib number

## Learnings

1. basically decision to take single step or 2 step can be come a decision treee
2. So there is only 1 kind of step from n-1 to n
3. 2 From n-2 to n (1+1, 2)
4. 3 From n-3 to n (1+1+1,2+1,1+2)
5. 5 from n-4 to n (1+1+1+1, 2+1+1, 1+2+1, 1+1+2, 2+2)
6. Basically it becmoes a Fib series