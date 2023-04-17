const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 10,
    color: 'hotpink'
};

const c2 = {
    x: canvasWidth,
    y: 400,
    width: 300,
    speed: -10,
    color: 'pink'
};


// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move car1:
    c1.x += c1.speed;
    console.log(c1.x);

    // move car2:
    c2.x += c2.speed;
    console.log(c2.x);

    // handles car 1
    if (c1.x > canvasWidth + 200) {
        c1.x = -200;
    }

    // handle car 2:
    if (c2.x < -200) {
        c2.x = canvasWidth + 200;
    }

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    
    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
