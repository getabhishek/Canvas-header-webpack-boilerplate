// Mouse position
let mouse = {
    x: undefined,
    y: undefined
}

let getMouse = () => mouse;

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse);
})

// Random number generator
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// Random color picker from an array of colors
function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

// Calculate distance between 2 positions
function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

module.exports = { getMouse, randomIntFromRange, randomColor, distance }