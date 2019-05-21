(function(exports) {  //the object is created to get the 8 coordinates of the neighbors
    var DIRECTIONS = [ 'n', 'e', 's', 'w', 'ne', 'nw', 'se', 'sw'];

    function Pixel(i, w, h, canvas) {
        this.index = i;
        this.width = w;
        this.height = h;
        this.neighbors = [];
        this.canvas = canvas;

        DIRECTIONS.map(function(d, idx) {
            this.neighbors.push(this[d]());
        }.bind(this));
    }

    Pixel.prototype.n = function() {
        return (this.index - this.width * 4);
    };

    Pixel.prototype.e = function() {
        return (this.index + 4);
    };

    Pixel.prototype.s = function() {
        return (this.index + this.width * 4);
    };

    Pixel.prototype.w = function() {
        return (this.index - 4);
    };

    Pixel.prototype.ne = function() {
        return (this.index - this.width * 4 + 4);
    };

    Pixel.prototype.nw = function() {
        return (this.index - this.width * 4 - 4);
    };

    Pixel.prototype.se = function() {
        return (this.index + this.width * 4 + 4);
    };

    Pixel.prototype.sw = function() {
        return (this.index + this.width * 4 - 4);
    };

    Pixel.prototype.r = function() {
        return this.canvas[this.index];
    };

    Pixel.prototype.g = function() {
        return this.canvas[this.index + 1];
    };;

    Pixel.prototype.b = function() {
        return this.canvas[this.index + 2];
    };

    Pixel.prototype.a = function() {
        return this.canvas[this.index + 3];
    };

    Pixel.prototype.isBorder = function() {
        return (this.index - (this.width * 4)) < 0 ||
            (this.index % (this.width * 4)) === 0 ||
            (this.index % (this.width * 4)) === ((this.width * 4) - 4) ||
            (this.index + (this.width * 4)) > (this.width * this.height * 4);
    };

    exports.Pixel = Pixel;
}(this));

function roundInFourDirrections(degree) {  //we round degree to vertical, horizontal, diagonals
    var degree = degree < 0 ? degree + 180 : degree;
    if ((degree >= 0 && degree <= 22.5) || (degree > 157.5 && degree <= 180)) {
        return 0;
    } else if (degree > 22.5 && degree <= 67.5) {
        return 45;
    } else if (degree > 67.5 && degree <= 112.5) {
        return 90;
    } else if (degree > 112.5 && degree <= 157.5) {
        return 135;
    }
};

function gradient(canvas, op) {
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, canvas.height / 2, canvas.width, canvas.height / 2);
    var imageDataCopy = context.getImageData(0, canvas.height / 2, canvas.width, canvas.height / 2);
    var dirrection_map = [];
    var gradient_map = [];

    var SOBEL_X_FILTER = [
        [-1, 0, 1],
        [-2, 0, 2],
        [-1, 0, 1]
    ];

    var SOBEL_Y_FILTER = [
        [1, 2, 1],
        [0, 0, 0],
        [-1, -2, -1]
    ];

    var ROBERTS_X_FILTER = [
        [1, 0],
        [0, -1]
    ];

    var ROBERTS_Y_FILTER = [
        [0, 1],
        [-1, 0]
    ];

    var PREWITT_X_FILTER = [
        [-1, 0, 1],
        [-1, 0, 1],
        [-1, 0, 1]
    ];

    var PREWITT_Y_FILTER = [
        [-1, -1, -1],
        [0, 0, 0],
        [1, 1, 1]
    ];

    var OPERATORS = {
        'sobel': { x: SOBEL_X_FILTER, y: SOBEL_Y_FILTER, len: SOBEL_X_FILTER.length},
        'roberts': { x: ROBERTS_X_FILTER, y: ROBERTS_Y_FILTER, len: ROBERTS_Y_FILTER.length},
        'prewitt': { x: PREWITT_X_FILTER, y: PREWITT_Y_FILTER, len: PREWITT_Y_FILTER.length}
    };

    RunImage(canvas, 3, function (current, neighbors) {
        var x_ = 0, y_ = 0;
        var pixel = new Pixel(current, imageDataCopy.width, imageDataCopy.height);
        if (!pixel.isBorder()) {
            for (var i = 0; i < OPERATORS[op].len; i++) {
                for (var j = 0; j < OPERATORS[op].len; j++) {
                    x_ += imageData.data[neighbors[i][j]] * OPERATORS[op]["x"][i][j];
                    y_ += imageData.data[neighbors[i][j]] * OPERATORS[op]["y"][i][j];
                }
            }
        }
        dirrection_map[current] = roundInFourDirrections(Math.atan2(y_, x_) * (180 / Math.PI));
        gradient_map[current] = Math.round(Math.sqrt(x_ * x_ + y_ * y_));
        setPixel(current, gradient_map[current], imageDataCopy);
    });

    context.putImageData(imageDataCopy, 0, 600);

    return { dirrection_map: dirrection_map, gradient_map: gradient_map };
}