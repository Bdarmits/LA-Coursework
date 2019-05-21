function get_grey(pixel) {
    return ((0.3 * pixel.r) + (0.59 * pixel.g) + (0.11 * pixel.b));
}

function doGrayscale(canvas) {
    var context = canvas.getContext('2d');
    var imageDataCopy = context.getImageData(0, 0, canvas.width, canvas.height / 2);
    var level;
    RunImage(canvas, null, function (current) {
        level = get_grey(getPixel(current, imageDataCopy));
        setPixel(current, level, imageDataCopy);
    });

    context.putImageData(imageDataCopy, 0, 600);
}