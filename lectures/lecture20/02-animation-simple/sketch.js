let x = 100;
let y = 0;
let width = 50;
let speed = 10;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// In p5.js, if you create a function called "draw",
// the function will be invoked over and over again
// in an animation loop (which is part of how p5.js 
// works).
function draw() {
    // x += speed;
    width += 3;
    y += speed;

    clear();
    noFill();
    circle(x, y, width);
    // drawGrid(canvasWidth, canvasHeight);
}
