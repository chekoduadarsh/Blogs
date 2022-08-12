#!/bin/python3

import math
import os
import random
import re
import sys
#
# Complete the 'gridChallenge' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING_ARRAY grid as parameter.
#

def gridChallenge(grid):
    int_grid = []
    for row in grid:
        int_row = [ord(x) for x in row]
        int_row.sort()
        int_grid.append(int_row)
    int_grid_t = list(map(list, zip(*int_grid)))
    for row in int_grid_t:
        if (row != sorted(row)):
            return "NO"
    return "YES"
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        grid = []

        for _ in range(n):
            grid_item = input()
            grid.append(grid_item)

        result = gridChallenge(grid)

        fptr.write(result + '\n')

    fptr.close()
