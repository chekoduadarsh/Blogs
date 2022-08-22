# Roman to Integer
https://leetcode.com/problems/roman-to-integer/

```python
class Solution:
    def romanToInt(self, s: str) -> int:
        numerals = {
            "I":1,
            "V":5,
            "X":10,
            "L":50,
            "C":100,
            "D":500,
            "M":1000
        }
        out = 0
        i = len(s) - 1
        
        while i >= 0:
            if i == 0:
                out += numerals[s[0]]
                break
            if s[i] == "X" and s[i-1] == "I":
                out += 9
                i -= 2
                continue
            if s[i] == "V" and s[i-1] == "I":
                out += 4
                i -= 2      
                continue
            if s[i] == "C" and s[i-1] == "X":
                out += 90
                i -= 2
                continue
            if s[i] == "L" and s[i-1] == "X":
                out += 40
                i -= 2
                continue
            if s[i] == "M" and s[i-1] == "C":
                out += 900
                i -= 2
                continue
            if s[i] == "D" and s[i-1] == "C":
                out += 400
                i -= 2
                continue
            out += numerals[s[i]]
            i -= 1
            
        return out
```

## Learnings

1. For roman go fromback its easier
2. Long code is a bad code but better than wrong code