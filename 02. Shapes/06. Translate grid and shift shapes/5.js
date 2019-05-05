'use strict';

var tileWidth;
var tileCount = 20;

var backRadius = 30;
var foreRadius = 15;

var backgroundColor;
var backColor;
var foreColor;
var backAlpha = 100;
var foreAlpha = 100;

var actRandomSeed = 0;

function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 100);
    noStroke();

    backColor = color(0, 0, 0, backAlpha);   // black
    foreColor = color(0, 0, 100, foreAlpha); // white
}

function draw() {

    clear();
    randomSeed(actRandomSeed);
    tileWidth = width / tileCount;
    translate(tileWidth / 2, tileWidth / 2);


    for (var y = 0; y < tileCount; y++) {
        for (var x = 0; x < tileCount; x++) {

            var posX = tileWidth * x;
            var posY = tileWidth * y;

            var shiftX = random(-1, 1) * mouseX / 20;
            var shiftY = random(-1, 1) * mouseY / 20;

            // var shiftX = Math.floor(random(-1, 2)) * mouseX / 20;
            // var shiftY = Math.floor(random(-1, 2)) * mouseY / 20;

            fill(backColor);
            ellipse(posX + shiftX, posY + shiftY, backRadius, backRadius);
        }
    }

    for (var y = 0; y < tileCount; y++) {
        for (var x = 0; x < tileCount; x++) {

            var posX = tileWidth * x;
            var posY = tileWidth * y;

            fill(foreColor);
            ellipse(posX, posY, foreRadius, foreRadius);
        }
    }

}

function mousePressed() {
    actRandomSeed = random(100000);
}

function keyReleased() {

    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    if (key == '1') {
        if (colorsEqual(backColor, color(0, 0, 0, backAlpha))) {
            backColor = color(273, 73, 51, backAlpha);
        } else {
            backColor = color(0, 0, 0, backAlpha);
        }
    }
    if (key == '2') {
        if (colorsEqual(foreColor, color(360, 100, 100, foreAlpha))) {
            foreColor = color(323, 100, 77, foreAlpha);
        } else {
            foreColor = color(360, 100, 100, foreAlpha);
        }
    }

    if (key == '3') {
        if (backAlpha == 100) {
            backAlpha = 50;
            foreAlpha = 50;
        } else {
            backAlpha = 100;
            foreAlpha = 100;
        }

        backColor = color(
            hue(backColor),
            saturation(backColor),
            brightness(backColor),
            backAlpha
        );
        foreColor = color(
            hue(foreColor),
            saturation(foreColor),
            brightness(foreColor),
            foreAlpha
        );
    }

    if (key == '0') {
        backRadius = 30;
        foreRadius = 15;
        backAlpha = 100;
        foreAlpha = 100;
        backColor = color(0, 0, 0, backAlpha);
        foreColor = color(0, 0, 100, foreAlpha);
    }

    if (keyCode == UP_ARROW) backRadius += 2;
    if (keyCode == DOWN_ARROW) backRadius = max(backRadius - 2, 10);
    if (keyCode == LEFT_ARROW) foreRadius = max(foreRadius - 2, 5);
    if (keyCode == RIGHT_ARROW) foreRadius += 2;
}

function colorsEqual(col1, col2) {
    return col1.toString() == col2.toString();
}