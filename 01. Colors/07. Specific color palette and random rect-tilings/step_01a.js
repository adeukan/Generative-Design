function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 100);
}


function draw() {

	noLoop();

	// random number of parts in the specified range
	var numOfParts = int(random(2, 15));

	// generate parts
	var parts = [];
	for (var i = 0; i < numOfParts; i++) {
		// each part has random width in the specified range
		parts.push(random(1, 11));
	}

	// calculate the sum width of all parts
	var sumPartsTotal = 0;
	for (var i = 0; i < parts.length; i++) {
		sumPartsTotal += parts[i];
	}

	// scale each part to the width of canvas
	for (var i = 0; i < parts.length; i++) {
		parts[i] = map(parts[i], 0, sumPartsTotal, 0, width);
	}

	console.log(parts);

	// draw one row
	var sumPartsNow = 0;
	for (var i = 0; i < parts.length; i++) {

		var xPos = sumPartsNow;
		var yPos = 0;

		var w = parts[i];
		var h = 100;

		rect(xPos, yPos, w, h);

		// shift xPos to the position of the next tile
		sumPartsNow += parts[i];
	}
}
