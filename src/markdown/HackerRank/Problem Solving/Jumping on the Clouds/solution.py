#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'jumpingOnClouds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY c as parameter.
#

def jumpingOnClouds(c):
    jumps = 0
    i = 0
    while i < len(c)-2:
        print(c[i], c[i+1],c[i+2])
        if c[i+1] == 1:
            i += 2
            jumps += 1
            continue
        elif c[i+2] == 1:
            i += 3
            jumps += 2
            continue
        else:
            i += 2
            jumps += 1
    if len(c)-i == 2:
        jumps += 1
    return jumps

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    c = list(map(int, input().rstrip().split()))

    result = jumpingOnClouds(c)

    fptr.write(str(result) + '\n')

    fptr.close()
