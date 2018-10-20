'use strict';

// number of colours in the palette
var colorCount = 20;

// palette
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];


function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 100);
}


function draw() {

	noLoop();

	// create palette
    for (var i = 0; i < colorCount; i++) {
        if (i % 2 == 0) {
            hueValues[i] = random(130, 220);
            saturationValues[i] = 100;
            brightnessValues[i] = random(15, 100);
        } else {
            hueValues[i] = 195;
            saturationValues[i] = random(20, 100);
            brightnessValues[i] = 100;
        }
    }

	var rowCount = int(random(5, 30));
	var rowHeight = height / rowCount;

	// count parts
    var partCounter = 0;


	for (var i = rowCount; i >= 0; i--) {

		var numOfParts = int(random(2, 15));

		var parts = [];
		for (var j = 0; j < numOfParts; j++) {
			parts.push(random(1, 11));
		}

		var sumPartsTotal = 0;
		for (var j = 0; j < parts.length; j++) {
			sumPartsTotal += parts[j];
		}

		var sumPartsNow = 0;
		for (var j = 0; j < parts.length; j++) {

			sumPartsNow += parts[j];

			var xPos = map(sumPartsNow, 0, sumPartsTotal, 0, width);
			var yPos = i * rowHeight;

			var w = -map(parts[j], 0, sumPartsTotal, 0, width);
			var h = rowHeight;

			// use next palette colour in the range between 0 and colorCount
			var index = partCounter % colorCount;
            var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
            fill(col);

			rect(xPos, yPos, w, h);

			// next part
			partCounter++;
		}
	}
}