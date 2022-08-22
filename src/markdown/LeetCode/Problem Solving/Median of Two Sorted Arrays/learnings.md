# Median of Two Sorted Arrays
https://leetcode.com/problems/median-of-two-sorted-arrays/
```python
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums1.extend(nums2)
        nums1.sort()
        l = len(nums1)-1
        if l % 2 != 0:
            return (nums1[int((l/2)+0.5)] + nums1[int((l/2)-0.5)]) / 2
        else:
            return nums1[int(l/2)]
```

## Learnings

1. Simple works as usual