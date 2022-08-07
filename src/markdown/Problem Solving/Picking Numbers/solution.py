#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'pickingNumbers' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#

def pickingNumbers(a):
    res= 0
    for i in range(len(a)):
        diffs = [x - a[i] for x in a]
        if 1 in diffs or 0 in diffs:
            if res < diffs.count(0)+diffs.count(1):
                res = diffs.count(0)+diffs.count(1)
    return res
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))

    result = pickingNumbers(a)

    fptr.write(str(result) + '\n')

    fptr.close()
