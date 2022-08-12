#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeInWords' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER h
#  2. INTEGER m
#
num2words = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', \
            6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine', 10: 'Ten', \
        11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', \
        15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', \
        19: 'Nineteen', 20: 'Twenty ', 30: 'Thirty ', 40: 'Forty ', \
        50: 'Fifty ', 60: 'Sixty ', 70: 'Seventy ', 80: 'Eighty ', \
        90: 'Ninety ', 0: 'Zero'}

def n2w(n):
    try:
        return num2words[n]
    except KeyError:
        try:
            return num2words[n-n%10] + num2words[n%10].lower()
        except KeyError:
            return 'Number out of range'
                
def timeInWords(h, m):
    if m == 0:
        return  ((n2w(h)) + " o' clock").lower()
    if m == 15:
        return   ("quarter past "+ (n2w(h))).lower()
    if m == 30:
        return  ("half past "+  (n2w(h))).lower()
    if m == 45:
        return  ("quarter to "+ (n2w(h+1))).lower()
    if m > 30:
        return ((n2w(60-m)) +" minutes to "+ (n2w(h+1))).lower()
    if m == 1:
        return ((n2w(m)) +" minute past "+ (n2w(h))).lower()
    
    return ((n2w(m)) +" minutes past "+ (n2w(h))).lower()

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    h = int(input().strip())

    m = int(input().strip())

    result = timeInWords(h, m)

    fptr.write(result + '\n')

    fptr.close()
