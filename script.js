var img = document.getElementById('img');


function DoSepia() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = sepia(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoGreyScale() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = greyscale(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}


function RotateR() {
    DoRotate(img, 150, 150, 10);
}

function RotateL() {
    DoRotate(img, 150, 150, -10);
}

var RADIANS = Math.PI / 180;

function DoRotate(image, x, y, angle) {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.save(); // save before screwing
    context.translate(x, y);
    context.rotate(angle * RADIANS);
    context.drawImage(image, -(image.width/2), -(image.height/2));
    context.restore();
}

/*function DoRotate_R() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = rotate(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoRotate_R_2() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.save(); // save before screwing
    context.translate(x, y);
    var t = new Transform();
    imageDataFiltered = t.rotate(20);
    //context.rotate(angle * RADIANS);
    context.drawImage(imageDataFiltered, -(imageDataFiltered.width/2), -(imageDataFiltered.height/2));
    context.restore();
}

var rotate = function(matrix) {
    // iterate through array
    for (var i = 0; i <= matrix.length-1; i++) {
        // keeps track of our matrix length inside of inner loop
        var tracker = matrix.length-1;

        // inner loop that starts at the end of the matrix length
        for (var j = matrix.length-1; j >= 0; j--) {
            // assigns the popped value to current
            var current = matrix[i].pop();
            // unshifts the valued assigned to current to the first position of last array
            matrix[tracker].unshift(current);
            // decrement tracker after each j iteration
            tracker--;
        }
    }
    return matrix;
};



function rotatePixels(image) {
    var x, y, x1, y1, edge;
    const N = image.length;
    const N1 = N - 1;
    const N2 = N / 2;
    x = y = 0;
    edge = x1 = y1 = N1;
    while (y < N2) {
        while (x < edge) {
            const a = image[y][x];
            image[y][x]      = image[x1][N1-y1];
            image[x1][N1-y1] = image[y1][x1];
            image[y1][x1]    = image[x][y1];
            image[x][y1]     = a;
            x += 1;
            x1 -= 1;
        }
        x  = y += 1;
        y1 = x1 = N1-x;
        edge -= 1;
    }
    return image;
}
*/

function DoNegative() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = negative(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoBrightness() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = brightness(imageData, -100);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoThreshold() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = threshold(imageData, 200);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoGradient() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = duotone(imageData, '#ff0000', '#4d93bc');
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoMirror() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = mirror(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoSaturation() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = saturation(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoGaussian1() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = gaussian1(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoGaussian2() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = gaussian2(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoSharpen() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = sharpen(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoLaplacian() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = laplacian(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoPrewittHorizontal() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = prewittHorizontal(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoPrewittVertical() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = prewittVertical(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoHighpass() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = highpass(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoRed() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = red(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoGreen() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = green(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}

function DoBlue() {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, 300, 300);
    imageDataFiltered = blue(imageData);
    context.putImageData(imageDataFiltered, 0, 0);
}











var sepia = function (imageData) {
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) {
        var r = pixels[i];
        var g = pixels[i + 1];
        var b = pixels[i + 2];
        pixels[i]     = (r * 0.393)+(g * 0.769)+(b * 0.189); // red
        pixels[i + 1] = (r * 0.349)+(g * 0.686)+(b * 0.168); // green
        pixels[i + 2] = (r * 0.272)+(g * 0.534)+(b * 0.131); // blue
    }
    return imageData;
};

var greyscale = function (imageData) {
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4){
        var r = pixels[i];
        var g = pixels[i + 1];
        var b = pixels[i + 2];
        var grey = r * .3 + g * .59 + b * .11;

        pixels[i] = grey;
        pixels[i + 1] = grey;
        pixels[i + 2] = grey;
    }
    return imageData;
}


var negative = function (imageData) {
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) {
        pixels [i] = 255 - pixels[i];
        pixels [i + 1] = 255 - pixels[i + 1];
        pixels [i + 2] = 255 - pixels[i + 2];
    }
    return imageData;
}

/*var brightness = function (imageData) {
    var pixels = imageData.data;
    for (var x = 0; x < pixels.width; x ++){
        for (var y = 0; y < pixels.height; y ++){
            var loc = x + y * pixels.width;
            var r = red (pixels.pixel)
        }
    }
}*/

var brightness = function (imageData, adjustment) {
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4){
        pixels[i] += adjustment;
        pixels[i + 1] += adjustment;
        pixels[i + 2] += adjustment;
    }
    return imageData;
}

var threshold = function (imageData, threshold) {
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) {
        var r = pixels [i];
        var g = pixels [i + 1];
        var b = pixels [i + 2];
        var v = (0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold) ? 255 : 0;
            pixels[i] = pixels[i + 1] = pixels[i + 2] = v;
    }
    return imageData;
}


function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

var gradientMap = function (tone1, tone2) {
    var rgb1 = hexToRgb(tone1);
    var rgb2 = hexToRgb(tone2);
    var gradient = [];
    for (var i = 0; i < (256 * 4); i += 4){
        gradient[i] = ((256 - (i / 4)) * rgb1.r + (i / 4) * rgb2.r) / 256;
        gradient[i + 1] = ((256 - (i / 4)) * rgb1.g + (i / 4) * rgb2.g) / 256;
        gradient[i + 2] = ((256 - (i / 4)) * rgb1.b + (i / 4) * rgb2.b) / 256;
        gradient[i + 3] = 255;
    }
    return gradient;
}

var duotone = function(imageData, tone1, tone2) {
    imageDataFiltered = greyscale(imageData);
    var gradient = gradientMap(tone1, tone2);
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4){
        d [i] = gradient[d[i] * 4];
        d [i + 1] = gradient[d[i + 1] * 4 + 1];
        d [i + 2] = gradient[d[i + 2] * 4 + 2];
    }
    return imageData;
}

var mirror = function (imageData) {
    var tmp = [];
    var width = (imageData.width * 4);

    for (var h = 0; h < imageData.height; h++) {
        var offset = h * width;
        var middle = imageData.width / 2;

        for (var w = 0; w < middle; w++) {
            var pos = w * 4;
            var pxl = pos + offset;
            var lastPxl = width - pos - 4 + offset;

            tmp[0] = imageData.data[pxl];
            tmp[1] = imageData.data[pxl + 1];
            tmp[2] = imageData.data[pxl + 2];
            tmp[3] = imageData.data[pxl + 3];

            imageData.data[pxl] = imageData.data[lastPxl];
            imageData.data[pxl + 1] = imageData.data[lastPxl + 1];
            imageData.data[pxl + 2] = imageData.data[lastPxl + 2];
            imageData.data[pxl + 3] = imageData.data[lastPxl + 3];

            imageData.data[lastPxl] = tmp[0];
            imageData.data[lastPxl + 1] = tmp[1];
            imageData.data[lastPxl + 2] = tmp[2];
            imageData.data[lastPxl + 3] = tmp[3];
        }
    }

    return imageData;
}

var saturation = function (imageData) {
    var l = 2.9;
    var RW = 0.3086;
    var RG = 0.6084;
    var RB = 0.0820;
    var RW0 = (1 - l) * RW + l;
    var RW1 = (1 - l) * RW;
    var RW2 = (1 - l) * RW;
    var RG0 = (1 - l) * RG;
    var RG1 = (1 - l) * RG + l;
    var RG2 = (1 - l) * RG;
    var RB0 = (1 - l) * RB;
    var RB1 = (1 - l) * RB;
    var RB2 = (1 - l) * RB + l;

    for (var i = 0; i < imageData.data.length; i += 4) {
        imageData.data[i]   = RW0 * imageData.data[i] + RG0 * imageData.data[i+1] + RB0 * imageData.data[i+2];
        imageData.data[i + 1] = RW1 * imageData.data[i] + RG1 * imageData.data[i + 1] + RB1 * imageData.data[i + 2];
        imageData.data[i + 2] = RW2 * imageData.data[i] + RG2 * imageData.data[i + 1] + RB2 * imageData.data[i + 2];
    }

    return imageData;
}



var convolution = function(pixels, weights) {
    var side = Math.round(Math.sqrt(weights.length)),
        halfSide = Math.floor(side/2),
        src = pixels.data,
        canvasWidth = pixels.width,
        canvasHeight = pixels.height,
        temporaryCanvas = document.createElement('canvas'),
        temporaryCtx = temporaryCanvas.getContext('2d'),
        outputData = temporaryCtx.createImageData(canvasWidth, canvasHeight);

    for (var y = 0; y < canvasHeight; y++) {

        for (var x = 0; x < canvasWidth; x++) {

            var dstOff = (y * canvasWidth + x) * 4,
                sumReds = 0,
                sumGreens = 0,
                sumBlues = 0;

            for (var kernelY = 0; kernelY < side; kernelY++) {
                for (var kernelX = 0; kernelX < side; kernelX++) {

                    var currentKernelY = y + kernelY - halfSide,
                        currentKernelX = x + kernelX - halfSide;

                    if (currentKernelY >= 0 &&
                        currentKernelY < canvasHeight &&
                        currentKernelX >= 0 &&
                        currentKernelX < canvasWidth) {

                        var offset = (currentKernelY * canvasWidth + currentKernelX) * 4,
                            weight = weights[kernelY * side + kernelX];

                        sumReds += src[offset] * weight;
                        sumGreens += src[offset + 1] * weight;
                        sumBlues += src[offset + 2] * weight;
                    }
                }
            }

            outputData.data[dstOff] = sumReds;
            outputData.data[dstOff+1] = sumGreens;
            outputData.data[dstOff+2] = sumBlues;
            outputData.data[dstOff+3] = 255;
        }
    }
    return outputData;
}


var gaussian1 = function(imageData) {
    var d = 16,
        operator = [1/d, 2/d, 1/d,
            2/d, 4/d, 2/d,
            1/d, 2/d, 1/d];

    return convolution(imageData, operator);
}

var gaussian2 = function(imageData) {
    var d = 159,
        operator = [2/d, 4/d, 5/d, 4/d, 2/d,
            4/d, 9/d,12/d, 9/d, 4/d,
            5/d,12/d,15/d,12/d, 5/d,
            4/d, 9/d,12/d, 9/d, 4/d,
            2/d, 4/d, 5/d, 4/d, 2/d];

    return convolution(imageData, operator);
}


var sharpen = function(imageData) {
    var operator = [0, -0.2, 0,
        -0.2, 1.8, -0.2,
        0, -0.2, 0];

    return convolution(imageData, operator);
}

var laplacian = function(imageData) {
    var operator = [ 0, -1, 0,
        -1, 4, -1,
        0, -1, 0 ];

    return convolution(imageData, operator);
}

var prewittHorizontal = function(imageData) {
    var d = 3;
    var operator = [1/d, 1/d, 1/d,
        0, 0, 0,
        -1/d, -1/d, -1/d];

    return convolution(imageData, operator);
}

var prewittVertical = function(imageData) {
    var d = 3;
    var operator = [-1/d, 0, 1/d,
        -1/d, 0, 1/d,
        -1/d, 0, 1/d];

    return convolution(imageData, operator);
}


var highpass = function(imageData) {
    var operator = [-1, -1, -1,
        -1,  8, -1,
        -1, -1, -1];

    return convolution(imageData, operator);
}


var red = function(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        d[i] = d[i];
        d[i+1] = 0;
        d[i+2] = 0;
    }
    return imageData;
}

var green = function(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        d[i] = 0;
        d[i+2] = 0;
    }
    return imageData;
}

var blue = function(imageData) {
    var d = imageData.data;
    for (var i = 0; i < d.length; i += 4) {
        d[i] = 0;
        d[i+1] = 0;
    }
    return imageData;
}