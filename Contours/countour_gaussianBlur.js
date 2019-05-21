function SumArray(array) {
    var res = 0;
    array.map(function(element, index) {
        res += (/^\s*function Array/.test(String(element.constructor))) ? SumArray(element) : element;
    });

    return res;
}

function generateKernel(sigma, size) {
    var kernel = [];
    var EulerNumber = 2.718;
    for (var y = -(size - 1) / 2, k = 0; k < size; y++, k++) {
        kernel[k] = [];
        for (var x = -(size - 1) / 2, m = 0; m < size; x++, m++) { //creates kernel round to 3 decimal places
            kernel[k][m] = 1 / (2 * Math.PI * Math.pow(sigma, 2)) * Math.pow(EulerNumber, -(Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2)) / (2 * Math.pow(sigma, 2)));
        }
    }

    var normalize = 1 / SumArray(kernel); //normalize the kernel, makes its sum equals to 1

    for (var i = 0; i < kernel.length; i++) {
        for (var j = 0; j < kernel[i].length; j++) {
            kernel[i][j] = Math.round(normalize * kernel[i][j] * 1000) / 1000;
        }
    }
    return kernel;
}

function gaussianBlur(canvas, sigma, size) {
    var context = canvas.getContext('2d');

    var imageDataCopy = context.getImageData(0, canvas.height / 2, canvas.width, canvas.height / 2);
    var kernel = generateKernel(sigma, size);

    RunImage(canvas, size, function (current, neighbors) {
        var r_ = 0, g_ = 0, b_ = 0, pixel;
        for (var i = 0; i < size; i++) {
            for (var j = 0; j < size; j++) {
                pixel = getPixel(neighbors[i][j], imageDataCopy); //we multiply the pixel valueue by the kernel
                r_ += pixel.r * kernel[i][j];
                g_ += pixel.g * kernel[i][j];
                b_ += pixel.b * kernel[i][j];
            }
        }

        setPixel(current, {r: r_, g: g_, b: b_}, imageDataCopy);
    });

    context.putImageData(imageDataCopy, 0, 600);
}