// runs once before draw()
function setup() {

    // canvas size
    createCanvas(720,720);

    // HSB color model
    // colour palette consists of 360 hues
    // 100 gradations of saturation and brightness
    colorMode(HSB, 360, 100, 100);

    // CENTER - rectangle drawing mode for 'rect(x,y,w,z)'
    // x,y - center coordinates
    // w,z - rectangle width and height
    rectMode(CENTER);
}

// this method is performed on a loop
function draw() {

    // red background
    background(0, 80, 80);

    // rectangle color is blue
    fill(180, 80, 80);

    // draw rectangle of fixed size in the center of the canvas
    rect(width/2, height/2, 300, 300);
}
