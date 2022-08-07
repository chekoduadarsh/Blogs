```python 
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'connectedCell' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY matrix as parameter.
#

def connectedCell(matrix):
    filled = []
    
    mx = 0
    for row_i in range(len(matrix)):
        for cell_i in range(len(matrix[row_i])):
            if matrix[row_i][cell_i] == 1:
                filled.append((row_i,cell_i))    
    while filled:
        region = [filled.pop()]
        count = 0
        while region:
            n = region.pop()
            count += 1
            for f in list(filled):
                if abs(n[0] - f[0]) <= 1 and abs(n[1]-f[1]) <= 1:
                    region.append(f)
                    filled.remove(f)
            print(region)
        else:
            mx = max(mx, count)
    return mx
                
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    m = int(input().strip())

    matrix = []

    for _ in range(n):
        matrix.append(list(map(int, input().rstrip().split())))

    result = connectedCell(matrix)

    fptr.write(str(result) + '\n')

    fptr.close()

```