# Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/
```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        sub_s = ""
        sun_len_s = []
        for c in s:
            if c not in sub_s:
                sub_s = sub_s + c
            else:
                sun_len_s.append(len(sub_s)) # Sen 1
                
                sun_len_s.append(len(sub_s.split(c)[0])) #Sen2
                sub_s = sub_s.split(c)[1] + c
        sun_len_s.append(len(sub_s))
        return max(sun_len_s) if len(sun_len_s) != 0 else 0
```

## Learnings
1. Cover ground with diff scenraios! and find Max
2. Luck Matters
3. Believe in you