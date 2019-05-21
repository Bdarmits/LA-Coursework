function getPixelNeighbors(dir) {
    var degrees = {
        0: [{ x: 1, y: 2 }, { x: 1, y: 0 }],
        45: [{ x: 0, y: 2 }, { x: 2, y: 0 }],
        90: [{ x: 0, y: 1 }, { x: 2, y: 1 }],
        135: [{ x: 0, y: 0 }, {x: 2, y: 2 }]
    };
    return degrees[dir];
}

function nonMaximumSuppress(canvas, dirMap, gradMap) {
    var context = canvas.getContext('2d');
    var imageDataCopy = context.getImageData(0, canvas.height / 2, canvas.width, canvas.height);
    RunImage(canvas, 3, function(current, neighbors) {
        var pixNeighbors = getPixelNeighbors(dirMap[current]);
        var pix1 = gradMap[neighbors[pixNeighbors[0].x][pixNeighbors[0].y]];
        var pix2 = gradMap[neighbors[pixNeighbors[1].x][pixNeighbors[1].y]];
        if (pix1 > gradMap[current] ||
            pix2 > gradMap[current] ||
            (pix2 === gradMap[current] &&
                pix1 < gradMap[current])) {
            setPixel(current, 0, imageDataCopy);
        }
    });
    context.putImageData(imageDataCopy, 0, 600);
}