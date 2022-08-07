import sys
import cv2
import numpy as np
import math

def readImage(image_path):
    coloured_image = cv2.imread(image_path)
    grey_image = cv2.cvtColor(coloured_image, cv2.COLOR_BGR2GRAY)
    return grey_image


def convolov2d(image, kernel):
    """ Perfomes 2D Convolution Operation

    Args:
        image (numpyArray): Contains target image for convolution
        kernel (numpyArray): Contains kernel for convolution
    """
    if kernel.shape[0] % 2 == 0:
        print("Error, the kernel size must be odd")
        return -1

    output = np.zeros_like(image)

    padding = math.ceil(kernel.shape[0]/2)
    padding_r = int(padding/2)
    padding_l = int(-1*(padding/2))

    print(padding_r,padding_l, padding)

    image_padded = np.zeros((image.shape[0] + padding, image.shape[1] + padding))
    image_padded[padding_r:padding_l, padding_r:padding_l] = image



    for x in range(image.shape[1]):
        for y in range(image.shape[0]):
            output[y, x] = ((kernel * image_padded[y: y+kernel.shape[0], x: x+kernel.shape[1]]).sum())/(kernel.shape[0]*kernel.shape[1])
    return output

#KERNEL = np.array([[1, 1, 1], [1, 1, 1], [1, 1, 1]])   # Median Blur


KERNEL = np.array([[1, 2, 1], [0, 0, 0], [-1, -2, -1]])   # Sobel Blur
input_image = readImage('/home/adarsh/Desktop/OpenWorld/Blog/ProgrammingPractice/ConvolutionFromScratch/lenna.png')

output_image = convolov2d(input_image,KERNEL)

cv2.imshow("output",output_image)
cv2.waitKey(0) 
cv2.destroyAllWindows() 