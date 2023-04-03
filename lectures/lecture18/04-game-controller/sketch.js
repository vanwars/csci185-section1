let x = 500;
let y = 200;
let width = 200;
let fillColor = 'teal';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    //noFill();
    fill(fillColor);
    // circle(x, y, width);

    makeCreature(x, y, fillColor, 'black')

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    if (ev.code === 'ArrowUp') {
        y = y - 10;
    } else if (ev.code === 'ArrowDown') {
        y = y + 10;
    } else if (ev.code === 'ArrowLeft') {
        x = x - 10;
    } else if (ev.code === 'ArrowRight') {
        x = x + 10;
    } else if (ev.code === 'Space') {
        width += 10;
        //width = width + 10;
    } else if (ev.code === 'Minus') {
        width -= 10;
    } else if (ev.code === 'KeyR') {
        fillColor = 'red'; 
    }

    // redraw circle:
    // clear();
    fill(fillColor);
    // circle(x, y, width);
    makeCreature(x, y, fillColor, 'black')
    drawGrid(canvasWidth, canvasHeight);
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);



function makeCreature(x, y, fillColor, eyeColor) {
    // your creature:
    fill(fillColor);
    // face:
    circle(x, y, 300);

    fill(eyeColor);
    // left eye:
    ellipse(x - 50, y - 50, 30, 40);
    // right eye:
    ellipse(x + 50, y - 50, 30, 40);
}