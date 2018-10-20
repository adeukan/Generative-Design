'use strict';

// the initial number of cols and rows has been changed
var initTileCountX = 30;
var initTileCountY = 10;
var currentTileCountX = 30;
var currentTileCountY = 10;

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

	// noLoop();
}

function draw() {

	// currentTileCountX = 2;

	// limit mouse coordinates to canvas
  	var mX = constrain(mouseX, 0, width);
  	var mY = constrain(mouseY, 0, height);

  	// now the number of rows and cols is not fixed and depends on mouse position
  	var currentTileCountX = int(map(mX, 0, width-1, 1, initTileCountX)); 				// from 1 to 30
  	var currentTileCountY = int(map(mY, 0, height-1, 1, initTileCountY));				// from 1 to 10

	var tileWidth = width / currentTileCountX;
	// now, tile height is calculated based on the current number of rows
	var tileHeight = height / currentTileCountY;

	var colorIndex = 0;

	// the number of iterations is still based on the initial tile counts
	for (var gridY = 0; gridY < initTileCountY; gridY++) {
		for (var gridX = 0; gridX < initTileCountX; gridX++) {

			var posX = tileWidth * gridX;
			var posY = tileHeight * gridY;

			// use next palette colour in the range (between 0 and currentTileCountX)
			var index = colorIndex % currentTileCountX;

			fill(hueValues[index], saturationValues[index], brightnessValues[index]);
			rect(posX, posY, tileWidth, tileHeight);

			// colorIndex === currentTileCountX - 1 ? colorIndex = 0 : colorIndex++;

			// switch to next colour
			colorIndex++;
		}
	}

	// if (currentTileCountX % initTileCountX === 0) 	console.log("no offset");
	// else											console.log("offset");
}