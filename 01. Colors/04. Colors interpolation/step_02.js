'use strict'
var numOfRows;
var numOfCols;

var colorLeft = [];
var colorRight = [];

function setup() {

    createCanvas(400,400);
	numOfRows = 10;
	numOfCols = 10;

	shakeColors();
    noLoop();
}


function draw() {

    var tileWidth = width / numOfCols;
    var tileHeight = height / numOfRows;

    for(var gridY = 0; gridY < numOfRows; gridY++) {
        for(var gridX = 0; gridX <= numOfCols; gridX++ ) {

            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;

            // gridX - sequence number of a tile in a row (0-9)
            // colorPos - gridX translated into range from 0 to 1 (used to generate the tile hue)
            var colorPos = map(gridX, 0, numOfCols, 0, 1);

            // colours of start and end tiles in a row
            var startColor = colorLeft[gridY];
            var endColor = colorRight[gridY];

            // colour of each next tile a the row
            var interColor = lerpColor(startColor, endColor, colorPos);

            // set tile colour
            fill(interColor);

            rect(posX, posY, tileWidth, tileHeight);
        }
    }

}

function shakeColors() {

    for(var i = 0; i < numOfRows; i++) {

	    colorLeft[i] = color(random(250), random(250), random(250));
	    colorRight[i] = color(random(0,250), random(0,250), random(0,250));
    }
}
