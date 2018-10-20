'use strict';

var initTileCountX = 3;
var initTileCountY = 2;

// current number of rows and cols
var currentTileCountX = 3;
var currentTileCountY = 2;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

function setup() {

	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 100);

	for (var i = 0; i < initTileCountX; i++) {
		hueValues[i] = floor(random(360));
		saturationValues[i] = floor(random(100));
		brightnessValues[i] = floor(random(100));
	}

	noLoop();
}

function draw() {

	// reduce the number of cols from 3 to 2
	// it also means we will use only first 2 colours from the palette
	currentTileCountX = 2;

	// now, tile width is calculated based on the current number of cols (2)
	var tileWidth = width / currentTileCountX;
	var tileHeight = height / initTileCountY;

	// index of currently used color
	var colorIndex = 0;

	for (var gridY = 0; gridY < initTileCountY; gridY++) {
		// the loop still performs 3 iterations, but only 2 of them draw visible tiles
		// remaining 3rd tile is outside the canvas
		for (var gridX = 0; gridX < initTileCountX; gridX++) {

			var posX = tileWidth * gridX;
			var posY = tileHeight * gridY;

			// now, the number of used colours is limited to the number of cols
			fill(hueValues[colorIndex], saturationValues[colorIndex], brightnessValues[colorIndex]);
			rect(posX, posY, tileWidth, tileHeight);

			// limit the colorIndex in the range between 0 and 1 (2 cols - 2 colours)
			colorIndex === currentTileCountX - 1 ? colorIndex = 0 : colorIndex++;
		}
	}

	// check offset
	if (currentTileCountX % initTileCountX === 0) 	console.log("no offset");
	else											console.log("offset");
}