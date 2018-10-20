function setup() {

    createCanvas(720,720);
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);

    // drawing mode without stroke
    noStroke();
}

function draw() {

    // background color depends on Y mouse position
    // mouseY/2 is used to limit the value of possible hue from 0 to 360 (720/2 = 360)
    background(mouseY/2, 80, 80);

    // rectangle has the colour opposite to the background (360 - mouseY/2)
    fill(360-mouseY/2, 80, 80);

    // rectangle height and width depend on X mouse position
    rect(width/2, height/2, mouseX, mouseX);
}
