function generate_his(canvas) {
    var his = { g: [] };
    var size = 256, total = 0;
    var context = canvas.getContext('2d');
    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    while (size--) {
        his.g[size] = 0;
    }
    RunImage(canvas, null, function(i) {
        his.g[imageData.data[i]]++;
        total++;
    });
    his.length = total;
    return his;
}

function calculateVariance(w1, m1, w2, m2) {
    return w1 * w2 * (m1 - m2) * (m1 - m2);
}

function calculate_weight(his, s, e) {
    var total = his.reduce(function(i, j) {
        return i + j;
    }, 0);
    var histogram_part = (s === e) ? [his[s]] : his.slice(s, e);
    var part = histogram_part.reduce(function(i, j) {
        return i + j;
    }, 0);
    return parseFloat(part, 10) / total;
}

function calculate_middle(his, s, e) {
    var histogram_part = (s === e) ? [his[s]] : his.slice(s, e);
    var value = 0, sum = 0;
    histogram_part.forEach(function(element, i) {
        value += ((s + i) * element);
        sum += element;
    });
    return parseFloat(value, 10) / sum;
}

function fastOtsu(canvas) {
    var histogram = generate_his(canvas);
    var start = 0, end = histogram.g.length - 1;

    var left_weight, rigth_weight, left_mean, right_mean, betweenClassVariances = [], max = -Infinity, threshold;
    histogram.g.forEach(function(element, i) {
        left_weight = calculate_weight(histogram.g, start, i);
        rigth_weight = calculate_weight(histogram.g, i, end + 1);
        left_mean = calculate_middle(histogram.g, start, i);
        right_mean = calculate_middle(histogram.g, i, end + 1);
        betweenClassVariances[i] = calculateVariance(left_weight, left_mean, rigth_weight, right_mean);
        if (betweenClassVariances[i] > max) {
            max = betweenClassVariances[i];
            threshold = i;
        }
    });
    return threshold;
}

function get_the_edge_of_neighbors(i, imageData, threshold, included_edges) {
    var neighbors = [];
    var pixelement = new Pixel(i, imageData.width, imageData.height);

    for (var j = 0; j < pixelement.neighbors.length; j++) {
        if (imageData.data[pixelement.neighbors[j]] >= threshold && (included_edges === undefined || included_edges.indexOf(pixelement.neighbors[j]) === -1)) {
            neighbors.push(pixelement.neighbors[j]);
        }
    }
    return neighbors;
}

function _traverseEdge(current, imageData, threshold, traversed) { //traverse the pixelelemn until length has been reached
    var group = [current];
    var neighbors = get_the_edge_of_neighbors(current, imageData, threshold, traversed);
    for (var i = 0; i < neighbors.length; i++) {
        group = group.concat(_traverseEdge(neighbors[i], imageData, threshold, traversed.concat(group)));
    }
    return group;
}

function hysteresis(canvas) {
    var context = canvas.getContext('2d');
    var imageDataCopy = context.getImageData(0, canvas.height / 2, canvas.width, canvas.height);
    var realEdges = [];
    var t1 = fastOtsu(canvas); // high threshold valueue
    var t2 = t1 / 2; // low threshold valueue
    RunImage(canvas, null, function(current) {
        if (imageDataCopy.data[current] > t1 && realEdges[current] === undefined) {
            var group = _traverseEdge(current, imageDataCopy, t2, []);
            for (var i = 0; i < group.length; i++) {
                realEdges[group[i]] = true;
            }
        }
    });
    RunImage(canvas, null, function(current) {
        if (realEdges[current] === undefined) {
            setPixel(current, 0, imageDataCopy);
        } else {
            setPixel(current, 255, imageDataCopy);
        }
    });

    context.putImageData(imageDataCopy, 0, 600);
}