function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    // 1. What do you want to repeat?
    //  * calling the circle function, x value, size.
    // 2. How long do you want to repeat?
    //      * 5 times
    // 3. What do you want to change each time:
    //      * y -> add 50 each time
    noFill();

    let counter = 0;
    while (counter < 15) {
        circle(100, counter * 50, 50 + counter * 30);
        // circle(300, counter * 50, 50 + counter * 30);
        // circle(500, counter * 50, 50 + counter * 30);
        counter += 1;
    }

    // let y = 0;
    // while (y <= 800) {
    //     circle(100, y, 50);
    //     y += 50;
    // }

    drawGrid(canvasWidth, canvasHeight);
}
