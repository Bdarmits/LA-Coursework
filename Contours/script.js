(function () {
    var canvas = document.getElementById('Canvas');
    var context = canvas.getContext('2d');

    var img = document.createElement('img');

    img.crossOrigin = "Anonymous";

    img.addEventListener('load', function () {
        context.drawImage(img, 0, 0, 600, 600);

        document.querySelectorAll('.button')[0].addEventListener('click', function () {
            doGrayscale(canvas);
            gaussianBlur(canvas, 5, 1);
            var maps = gradient(canvas, 'sobel');
            nonMaximumSuppress(canvas, maps.dirrection_map, maps.gradient_map);
            hysteresis(canvas);

        });
    });

    img.src = '16.jpg';
})();
