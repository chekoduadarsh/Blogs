# Fib number

```python
class Solution:
    def fib(self, n: int) -> int:
        one, two  = 0, 1
        for i in range(n-1):
            tmp = one
            one = one +two
            two = 1 if tmp ==0 else tmp
        return 1 if n == 1 else one
```