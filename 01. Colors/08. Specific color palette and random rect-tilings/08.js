/**
 * generates a specific color palette and some random "rect-tilings"
 *
 * MOUSE
 * left click          : new composition
 *
 * KEYS
 * s                   : save png
 * c                   : save color palette
 */
 'use strict';

 var colorCount = 20;

// palette
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

var actRandomSeed = 0;
// fixed alpha value, now we can see the overlaping
var alphaValue = 27;

function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 100);
	noStroke();
}

function draw() {
	noLoop();
	background(0);
	randomSeed(actRandomSeed);

	// generate palette
	for (var i = 0; i < colorCount; i++) {
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

	// counter for all parts in the canvas
	var globalPartCounter = 0;

	// row count and row height
	var rowCount = int(random(5, 30));
	var rowHeight = height / rowCount;

	// draw each next row (start from the bottom)
	for (var i = rowCount; i >= 0; i--) {

		// initial number of parts in current row (may be increased later)
		// the lower row has more parts
		var rowPartCounter = i + 1;
		// contains parts (widths)
		var parts = [];


		// generate parts and sub-parts
		for (var ii = 0; ii < rowPartCounter; ii++) {

			// generate sub-parts for current part or not ?
			if (random() < 0.075) {
				// generate the number of sub-parts used
				var subParts = int(random(2, 20));
				// increasing the part counter will also increase the number of iterations of this loop
				rowPartCounter = rowPartCounter + subParts;
				// generate sub-parts
				for (var iii = 0; iii < subParts; iii++) {
					parts.push(random(2));
				}
			} else {
				// generate sub-parts
				parts.push(random(2, 20));
			}
		}


		// total width of all parts
		var sumPartsTotal = 0;
		for (var ii = 0; ii < rowPartCounter; ii++) {
			sumPartsTotal += parts[ii];
		}


		// draw rects
		var sumPartsNow = 0;
		for (var ii = 0; ii < parts.length; ii++) {
			
			sumPartsNow += parts[ii];

			var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
			var y = rowHeight * (i-1);
			var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
			// encrease the height to overlap tiles
			var h = rowHeight * 1.5;

			var index = globalPartCounter % colorCount;

			// the first colour is black
			var col1 = color(0);
			// the second color is the current colour from the palette
			var col2 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);

			// drawing a rect with gradient
			gradient(x, y, w, h, col1, col2);

			globalPartCounter++;
		}
	}
}

// drawing a rect with gradient
function gradient(x, y, w, h, c1, c2) {

	// global canvas context p5.js var
	var ctx = drawingContext; 

	// (x, y) - start coordinates of the gradient slope
	// (x, y + h) - end coordinates of the gradient slope
	// start and end coordinates have the same X but different Y, so we have vertical gradient
	var grd = ctx.createLinearGradient(x, y, x, y + h);

	// set the number of stops and their colours
	// 0 - start of gradient, 1 - end of gradient
	// only values between 0 and 1 are possible
	grd.addColorStop(0, c1);
	grd.addColorStop(1, c2);

	// set fill style and draw the rect with gradient
	ctx.fillStyle = grd;
	ctx.fillRect(x, y, w, h);
}

function mouseReleased() {
	actRandomSeed = random(100000);
	loop();
}

function keyPressed() {
	if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
	if (key == 'c' || key == 'C') {
		// -- save an ase file (adobe swatch export) --
		var colors = [];
		for (var i = 0; i < hueValues.length; i++) {
			colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
		}
		writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
	}
}
