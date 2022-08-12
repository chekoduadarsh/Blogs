#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'countingValleys' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER steps
#  2. STRING path
#

def countingValleys(steps, path):
    valy_hill = 0
    level = 0
    mini_path = []
    for step in path:
        if step == "U":
            level += 1
        if step == "D":
            level -= 1
        mini_path.append(step)
        if level == 0:
            if mini_path[0] != "U":
                valy_hill+=1
                mini_path = []
            else:
                mini_path = []
    return valy_hill

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    steps = int(input().strip())

    path = input()

    result = countingValleys(steps, path)

    fptr.write(str(result) + '\n')

    fptr.close()
