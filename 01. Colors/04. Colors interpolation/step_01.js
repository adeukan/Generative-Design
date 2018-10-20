'use strict'
var numOfRows;
var numOfCols;

var colorLeft = [];
var colorRight = [];

function setup() {

    createCanvas(400,400);

    // fixed number of rows & cols
	numOfRows = 10;
	numOfCols = 10;
 
    // get a set of random colours for left and right columns
	shakeColors();

    noLoop();
}


function draw() {

    // generated colours
    console.log(colorLeft, colorRight);

    // tile width and height
    var tileWidth = width / numOfCols;
    var tileHeight = height / numOfRows;

    // draw the grid
    // gridX - tile number in a row, gridY - tile number in a column
    for(var gridY = 0; gridY < numOfRows; gridY++) {

        for(var gridX = 0; gridX <= numOfCols; gridX++ ) {

            // posX,posY - start point of each next tile
            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;

            rect(posX, posY, tileWidth, tileHeight);
        }
    }
}

function shakeColors() {

	// get random colours for left and right tiles of each row
    for(var i = 0; i < numOfRows; i++) {

	    colorLeft[i] = color(random(250), random(250), random(250));
	    colorRight[i] = color(random(0,250), random(0,250), random(0,250));
    }
}
