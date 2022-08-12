```python
#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'encryption' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def encryption(s):
    length_root = math.sqrt(len(s))
    c_length_root = math.ceil(length_root)
    f_length_root = math.floor(length_root)
    
    encript = []
    encript_row = []
    for i in range(len(s)):
        encript_row.append(s[i])
        
        if (i+1)%c_length_root == 0 and i != 0:
            encript.append(encript_row)
            encript_row = []
    if len(encript) == 0:
        encript.append(encript_row)    
    elif(encript[len(encript)-1]) != encript_row and len(encript_row) != 0:
        encript.append(encript_row)
        

    s_encript = ""
    
    col_encript = []
    
    for j in range(c_length_root):
        for i in range(len(encript)):
                if  j >= len(encript[i]):
                    continue
                s_encript += encript[i][j]
        s_encript += " "           
    return (s_encript)
        
        
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = encryption(s)

    fptr.write(result + '\n')

    fptr.close()

```