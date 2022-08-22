# Two Sum
https://leetcode.com/problems/two-sum/
```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for n1 in range(len(nums)):
            for n2 in range(n1, len(nums)):
                if n1 == n2 :
                    continue
                if nums[n1] + nums[n2] == target:
                    return [n1, n2]
                    

```

## Mistakes/Learnings

1. Looped compleate range twise. No need to compare same numbers again!!
2. Also can use hashMapto resuce repeatation