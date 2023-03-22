function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#DDD");


    drawCreature();

    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}



function drawCreature() {
    fill("teal")
    circle(300, 200, 200);  // x, y, diameter

    fill('black')
    circle(250, 180, 40); 
    circle(350, 180, 40);
}