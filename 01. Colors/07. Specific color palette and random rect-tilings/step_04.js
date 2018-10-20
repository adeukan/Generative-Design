'use strict';

var colorCount = 20;

var hueValues = [];
var saturationValues = [];
var brightnessValues = [];

// parameter for randomSeed()
var actRandomSeed = 0;


function setup() {
    createCanvas(600, 600);
    colorMode(HSB, 360, 100, 100, 100);
    // don't use stroke
    noStroke();
}


function draw() {

    noLoop();

    // use pseudo-random numbers
    randomSeed(actRandomSeed);

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

    var partCounter = 0;
    var rowCount = int(random(5, 30));
    var rowHeight = height / rowCount;

    for (var i = rowCount; i >= 0; i--) {

        var numOfParts = int(random(2, 15));
        var parts = [];

        // for (var j = 0; j < numOfParts; j++) {
        // 	parts.push(random(1, 11));
        // }

        for (var j = 0; j < numOfParts; j++) {

            // generate sub-parts or not ?
            if (random() < 0.075) {
                // generate number of sub-parts
                var subParts = int(random(1, 11));
                // generate the width of all sub-parts and add them to the parts array
                for (var jj = 0; jj < subParts; jj++) {
                    parts.push(random(2));
                }
            }
            // don't generate sub-parts
            else {
                parts.push(random(1, 11));
            }
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

            var index = partCounter % colorCount;
            var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
            fill(col);
            rect(xPos, yPos, w, h);
            partCounter++;
        }
    }
}


// change the set of pseudo-random numbers used in the draw()
function mouseReleased() {
    actRandomSeed = random(100000);
    loop();
}


function keyPressed() {

	// save canvas as png file
    if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

    // save palette as .ase swatch file
    if (key == 'c' || key == 'C') {
        var colors = [];
        for (var i = 0; i < hueValues.length; i++) {
            colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
        }
        writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
    }
}