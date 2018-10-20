'use strict';

var initTileCountX = 30;
var initTileCountY = 10;
var currentTileCountX = 30;
var currentTileCountY = 10;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

// -----------------------------------------------------------------------
function setup() {

	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 100);

	for (var i = 0; i < initTileCountX; i++) {
		hueValues[i] = floor(random(360));
		saturationValues[i] = floor(random(100));
		brightnessValues[i] = floor(random(100));
	}
}

// -----------------------------------------------------------------------
function draw() {

	var mX = constrain(mouseX, 0, width);
	var mY = constrain(mouseY, 0, height);

	var currentTileCountX = int(map(mX, 0, width - 1, 1, initTileCountX));
	var currentTileCountY = int(map(mY, 0, height - 1, 1, initTileCountY));

	var tileWidth = width / currentTileCountX;
	var tileHeight = height / currentTileCountY;

	var colorIndex = 0;
	for (var gridY = 0; gridY < initTileCountY; gridY++) {
		for (var gridX = 0; gridX < initTileCountX; gridX++) {

			var posX = tileWidth * gridX;
			var posY = tileHeight * gridY;

			var index = colorIndex % currentTileCountX;

			fill(hueValues[index], saturationValues[index], brightnessValues[index]);
			rect(posX, posY, tileWidth, tileHeight);
			colorIndex++;
		}
	}
}

// ----------------------------------------------------------------------------
function keyPressed() {

	// save canvas as png file
	if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

	// save palette as .ase swatch file
	if (key == 'c' || key == 'C') {
		
		var palette = [];
		// put all the colours in the palette
		for (var i = 0; i < hueValues.length; i++) {
			palette.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
		}
		// save palette as .ase file
		writeFile([gd.ase.encode(palette)], gd.timestamp(), 'ase');
	}

	// generate the palette once again
	if (key == '1') {
		for (var i = 0; i < initTileCountX; i++) {
			hueValues[i] = random(360);
			saturationValues[i] = random(100);
			brightnessValues[i] = random(100);
		}
	}

	// palette with full brightness
	if (key == '2') {
		for (var i = 0; i < initTileCountX; i++) {
			hueValues[i] = random(360);
			saturationValues[i] = random(100);
			brightnessValues[i] = 100;
		}
	}

	// palette with full saturation
	if (key == '3') {
		for (var i = 0; i < initTileCountX; i++) {
			hueValues[i] = random(360);
			saturationValues[i] = 100;
			brightnessValues[i] = random(100);
		}
	}

	// black and white palette
	if (key == '4') {
		for (var i = 0; i < initTileCountX; i++) {

			// hue is not important because the saturation is 0
			hueValues[i] = 0;
			saturationValues[i] = 0;
			brightnessValues[i] = random(100);
		}
	}

	// palette of saturated blue
	if (key == '5') {
		for (var i = 0; i < initTileCountX; i++) {

			hueValues[i] = 195;
			saturationValues[i] = 100;
			brightnessValues[i] = random(100);
		}
	}

	// palette of bright blue
	if (key == '6') {
		for (var i = 0; i < initTileCountX; i++) {
			hueValues[i] = 195;
			saturationValues[i] = random(100);
			brightnessValues[i] = 100;
		}
	}

	// palette with particular range of hue, saturation and brightness
	if (key == '7') {
		for (var i = 0; i < initTileCountX; i++) {
			hueValues[i] = random(180);
			saturationValues[i] = random(80, 100);
			brightnessValues[i] = random(50, 90);
		}
	}

	// palette with particular range of hue, saturation and brightness
	if (key == '8') {
		for (var i = 0; i < initTileCountX; i++) {
			hueValues[i] = random(180, 360);
			saturationValues[i] = random(80, 100);
			brightnessValues[i] = random(50, 90);
		}
	}

	// palette of saturated colours and bright blue colours
	if (key == '9') {
		for (var i = 0; i < initTileCountX; i++) {
			if (i % 2 == 0) {
				hueValues[i] = random(360);
				saturationValues[i] = 100;
				brightnessValues[i] = random(100);
			} else {
				hueValues[i] = 195;
				saturationValues[i] = random(100);
				brightnessValues[i] = 100;
			}
		}
	}

	// palette of blue and green colours
	if (key == '0') {
		for (var i = 0; i < initTileCountX; i++) {
			if (i % 2 == 0) {
				hueValues[i] = 140;
				saturationValues[i] = random(30, 100);
				brightnessValues[i] = random(40, 100);
			} else {
				hueValues[i] = 210;
				saturationValues[i] = random(40, 100);
				brightnessValues[i] = random(50, 100);
			}
		}
	}
}