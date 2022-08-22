# Can Place Flowers

```python
class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        i = 1
        count  = 0
        l = len(flowerbed)-1
        if len(flowerbed) < 3:
            return 0>=n if 1 in flowerbed else 1>=n
        
        if flowerbed[0] == 0 and flowerbed[1] == 0:
            count +=1
            flowerbed[0] = 1

        while i < len(flowerbed)-1:
            if flowerbed[i] == 0 and flowerbed[i+1] == 0 and flowerbed[i-1] == 0:
                count +=1
                flowerbed[i] = 1
            i += 1
        if flowerbed[l] == 0 and flowerbed[l-1] == 0:
            count +=1
            flowerbed[l] = 1
        print(count)
        return count >= n
```

# Learnings

1. **Handle Edge cases in paper**
2. Test scenraio for small array neg numbers 
3. DONT ABUSE SUBMIT Buttons!!
