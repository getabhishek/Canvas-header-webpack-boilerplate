import * as canvasUtility from './utility';

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

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
    // get mouse position
    let mouse = canvasUtility.getMouse();

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

export default animate;