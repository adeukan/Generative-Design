'use strict';

// initial number of rows and cols
var initTileCountX = 3;
var initTileCountY = 2;

// arrays with palette parameters
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {

	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 100);

	// generate palette parameters
	// the number of colors in the palette corresponds to the number of tiles in a row (30)
	for (var i = 0; i < initTileCountX; i++) {
		hueValues[i] = floor(random(360));
		saturationValues[i] = floor(random(100));
		brightnessValues[i] = floor(random(100));
	}

	noLoop();
}


function draw() {

	// check the palette parameters
	console.log(hueValues, saturationValues, brightnessValues);

	// tile width and height
	var tileWidth = width / initTileCountX;
	var tileHeight = height / initTileCountY;

	// draw grid
	for (var gridY = 0; gridY < initTileCountY; gridY++) {

		for (var gridX = 0; gridX < initTileCountX; gridX++) {

			// gridX 	 - tile number in the row
      		// posX,posY - first pixel of the current tile
			var posX = tileWidth * gridX;
			var posY = tileHeight * gridY;

			// use a color with the same index as the tile number
			fill(hueValues[gridX], saturationValues[gridX], brightnessValues[gridX]);
			// draw each next tile
			rect(posX, posY, tileWidth, tileHeight);
		}
		
	}
}