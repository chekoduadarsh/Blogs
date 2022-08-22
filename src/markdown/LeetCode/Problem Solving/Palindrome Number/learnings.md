# Palindrome Number
https://leetcode.com/problems/palindrome-number/
```python
class Solution:
    def isPalindrome(self, x: int) -> bool:
        s = str(x)
        l = len(s)-1
        for i,a in enumerate(s):
            if s[i] != s[l-i]:
                return False
        return True
```
