# Two Sum II - Input Array Is Sorted
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

```python

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l = 0
        r = len(numbers) - 1

        while l<r:
            tot = numbers[r] + numbers[l]
            if target-tot < 0:
                r -= 1
            elif target-tot > 0:
                l += 1
            else:
                return [l+1,r+1]

```

1. Pointer to array alll the way
2. Since sorted strat from left to right pointers converge
3. re position the pointer according to the target vs current