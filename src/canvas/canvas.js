import * as canvasUtility from './utility';

// Mouse position
let mouse = {
    x: undefined,
    y: undefined
}

let canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');

addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y + pageYOffset;
})

// we should call init each time browser is resized
addEventListener("resize", () => {
    if (canvas.width !== innerWidth) {
        init();
    }
})

addEventListener('touchstart', (e) => {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
});

let init = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

var x = 200;
var y = 200;
var radius = 30;
var maxRadius = 50;
var dx = 4;
var dy = 4;

const animate = () => {
    requestAnimationFrame(animate);
    // clear canvas on each iteration
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.beginPath();

    //interactivity
    if (mouse.x - x < 50 && mouse.x - x > -50 && mouse.y - y < 50 && mouse.y - y > -50) {
        if (radius < maxRadius) {
            radius += 1;
        }
    } else if (radius > 30) {
        radius -= 1;
    }

    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.fillStyle = "rgba(0, 0, 255, 0.5)";
    c.fill();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

init();
export default animate;