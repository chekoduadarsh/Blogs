# 3Sum
https://leetcode.com/problems/3sum/

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sums = []
        nums.sort()
        for i, a in enumerate(nums):
            if i>0 and a == nums[i-1]:
                continue
                
            l, r = i+1, len(nums)-1
            
            while l<r:
                threeSum = a+ nums[l]+nums[r]
                if threeSum  > 0:
                    r-=1
                elif threeSum < 0:
                    l +=1
                else:
                    sums.append([a, nums[l], nums[r]])
                    l +=1
                    while nums[l] == nums[l-1] and l<r:
                        l+=1
                    
        return sums
            
```

1. Sort first to identify the repating element
2. Identify the repeating triplet by cathing the first number it self 
    [-3,1,2,-3] -> [-3,-3,1,2]
    Once sorted we can identify that since -3 first element is repeating
3. Take pointer one from left after the current index and right before end of list. Close them in to find triplet



## Learnings

1. use enumerate when loop gets you noth index and value!!
2. Reduce iteration by using pointer. In sum 2 you are looping = times of check

```python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        sums = []
        for n1 in range(len(nums)):
            for n2 in range(n1, len(nums)):
                for n3 in range(n2, len(nums)):
                    if n1 == n2 or n1 == n3 or n2 == n3 :
                        continue
                    if (nums[n1] + nums[n2] + nums[n3]) == 0:
                        add = True
                        for sum in sums:
                            if (nums[n1] in sum and nums[n2] in sum and nums[n3] in sum):
                                add =  False
                        if add:
                            sums.append([nums[n1], nums[n2], nums[n3]])
        if [0,0,0] not in sums:
            sums.append([0,0,0]) if nums.count(0) >= 3 else sums
        return sums
```

Above is a good code but inefficent!!