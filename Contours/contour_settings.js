function RunImage(canvas, size, f) {
    for (var y = 0; y < canvas.height; y++) {
        for (var x = 0; x < canvas.width; x++) {
            var i = x * 4 + y * canvas.width * 4;
            var matrix = getMatrix(x, y, size);
            f(i, matrix);
        }
    }

    function getMatrix(x_coord, y_coord, size) { //generates a 2d array
        if (!size) {
            return;
        }
        var matrix = [];
        for (var i = 0, y = -(size - 1) / 2; i < size; i++, y++) {
            matrix[i] = [];

            for (var j = 0, x = -(size - 1) / 2; j < size; j++, x++) {
                matrix[i][j] = (x_coord + x) * 4 + (y_coord + y) * canvas.width * 4;
            }
        }
        return matrix;
    }
}

function getRGBA(start, imageData) {
    return {
        r: imageData.data[start],
        g: imageData.data[start + 1],
        b: imageData.data[start + 2],
        a: imageData.data[start + 3]
    };
}

function getPixel(i, imageData) {
    if (i < 0 || i > imageData.data.length - 4) {
        return {
            r: 255,
            g: 255,
            b: 255,
            a: 255
        };
    } else {
        return getRGBA(i, imageData);
    }
}

function setPixel(i, valueue, imageData) {
    imageData.data[i] = typeof valueue === 'number' ? valueue : valueue.r;
    imageData.data[i + 1] = typeof valueue === 'number' ? valueue : valueue.g;
    imageData.data[i + 2] = typeof valueue === 'number' ? valueue : valueue.b;
}