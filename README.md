# LA-Coursework
Slide 1
To start with, the images we see on internet pages and the photos you take with your mobile phone are examples of digital images. It is possible to represent this kind of image using matrices. 

Next slide 2

The  image, we see on the presentation, can be represented as a grid of small  pixels. If we can assign numbers to each color, then, the grid of pixels can be represented as a numerical matrix.
If we assign 1 to the white color, and 0 to the black one, then, the image can be represented as a matrix, whose elements are the numbers 0 and 1.
The most popular color system is RGB, where each pixel specifies the amount of Red (R), Green (G) and Blue (B), and each colour can vary from 0 to 255. Thus, in the RGB, a pixel can be represented as a tri-dimensional vector (r, g, b) where r, g and b are integer numbers from 0 to 255.

Next slide 3(How can we apply filters on images)
From the point of view of linear algebra, filters are applied to each pixel of the matrix using the filter function. 
On the presentation, matrix M is the matrix associated to a full color image. pij is the pixel in the position (i, j), which is represented as the vector [r g b].

In the simplest case, when the filter needs only a pixel as input, the function can be a linear transformation, that transforms a tridimensional vector (pixel) into another tridimensional vector, or not.

Next Slide 4  (The example of simple filters that we implemented)
Here is the example of simple filters that we implemented.
But we didn’t stop on this and tried to do some more interesting image filters.

Next Slide 5

Has anybody heard something about convolution?
In Wikipedia it looks like that.  But actually it’s not so horrible.

Next slide 6 (There’s no way without formulas)

In image processing, a convolution matrix is just a small matrix. It is used for blurring, sharpening, embossing, edge detection, and more. This is accomplished by doing a convolution between a kernel and an image.
We can see the general expression of a convolution on the presentation.
Convolution is the process of adding each element of the image to its local neighbors, weighted by the kernel. 

For example, if we have two three-by-three matrices, the first a kernel, and the second an image piece, convolution is the process of flipping both the rows and columns of the kernel and then multiplying locally similar entries and summing. The element at coordinates [2, 2] (that is, the central element) of the resulting image would be a weighted combination of all the entries of the image matrix
 

Depending on the element values, a kernel can cause a wide range of effects. Here some examples of those, that we have implemented 

Next slide 7 (Identity) 
Next slide 8 (Sharpen) 
Next slide 9 (Gaussian blur 3 × 3)
Next slide 10 (Gaussian blur 5 × 5)
Next slide 11 (All the filters that use convolution)

Image filters are cool and fun, but we went deeper and we tried to implemented the object contouring and here is the result …

Show contour finding

Next slide 12 (The algorithm of finding contours)   

The Process of Canny edge detection algorithm can be broken down to 5 different steps:
1.	Apply Gaussian filter to smooth the image in order to remove the noise
2.	Find the intensity gradients of the image
3.	Apply non-maximum suppression to get rid of spurious response to edge detection
4.	Apply double threshold to determine potential edges
5.	Track edge by hysteresis: Finalize the detection of edges by suppressing all the other edges that are weak and not connected to strong edges.

It is obvious with gray scale and Gaussian blur. So…

Next slide 13 (Finding the intensity gradient of the image)

An edge in an image may point in a variety of directions, so we use four filters to detect horizontal, vertical and diagonal edges in the blurred image. The edge detection operator (such as Roberts, Prewitt, or Sobel) returns a value for the first derivative in the horizontal direction (Gx) and the vertical direction (Gy). From this the edge gradient and direction can be determined as you can see in the presentation. 

Here G can be computed using the hypot function and atan2 is the arctangent function with two arguments. /*The edge direction angle is rounded to one of four angles representing vertical, horizontal and the two diagonals (0°, 45°, 90° and 135°). An edge direction falling in each color region will be set to a specific angle values, for instance θ in [0°, 22.5°] or [157.5°, 180°] maps to 0°.*/

Next slide 14 (Non-maximum suppression)

Non-maximum suppression is applied to find "the largest" edge. After applying gradient calculation, the edge extracted from the gradient value is still quite blurred.
Non-maximum suppression can help to suppress all the gradient values (by setting them to 0) except the local maxima, which indicate locations with the sharpest change of intensity value. The algorithm for each pixel in the gradient image is:
1.	Compare the edge strength of the current pixel with the edge strength of the pixel in the positive and negative gradient directions.
2.	If the edge strength of the current pixel is the largest compared to the other pixels in the mask with the same direction (e.g., a pixel that is pointing in the y-direction will be compared to the pixel above and below it in the vertical axis), the value will be preserved. Otherwise, the value will be suppressed.

Next slide 15 (Double threshold)
After application of non-maximum suppression, remaining edge pixels provide a more accurate representation of real edges in an image. However, some edge pixels remain that are caused by noise and color variation. In order to account for these spurious responses, it is essential to filter out edge pixels with a weak gradient value and preserve edge pixels with a high gradient value. This is accomplished by selecting high and low threshold values. If an edge pixel’s gradient value is higher than the high threshold value, it is marked as a strong edge pixel. If an edge pixel’s gradient value is smaller than the high threshold value and larger than the low threshold value, it is marked as a weak edge pixel. If an edge pixel's value is smaller than the low threshold value, it will be suppressed. The two threshold values are empirically determined and their definition will depend on the content of a given input image.

Next slide 16 (Hysteresis)

So far, the strong edge pixels should certainly be involved in the final edge image, as they are extracted from the true edges in the image. However, there will be some debate on the weak edge pixels, as these pixels can either be extracted from the true edge, or the noise/color variations. To achieve an accurate result, the weak edges caused by the latter reasons should be removed. Usually a weak edge pixel caused from true edges will be connected to a strong edge pixel while noise responses are unconnected. To track the edge connection, blob analysis is applied by looking at a weak edge pixel and its 8-connected neighborhood pixels. As long as there is one strong edge pixel that is involved in the blob, that weak edge point can be identified as one that should be preserved.


Next slide 17 (The result)



 




