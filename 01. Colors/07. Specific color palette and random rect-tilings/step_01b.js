function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 100);
}


function draw() {

	noLoop();

	var numOfParts = int(random(2, 15));

	var parts = [];
	for (var i = 0; i < numOfParts; i++) {
		parts.push(random(1, 11));
	}

	var sumPartsTotal = 0;
	for (var i = 0; i < parts.length; i++) {
		sumPartsTotal += parts[i];
	}

	// // scale each part to the width of canvas
	// for (var i = 0; i < parts.length; i++) {
	// 	parts[i] = map(parts[i], 0, sumPartsTotal, 0, width);
	// }

	console.log(parts);


	// OPTION 1
	var sumPartsNow = 0;
	for (var i = 0; i < parts.length; i++) {

		// scale xPos to the width of canvas
		var xPos = map(sumPartsNow, 0, sumPartsTotal, 0, width);
		var yPos = 0;

		// scale each part width to the width of canvas
		var w = map(parts[i], 0, sumPartsTotal, 0, width);
		var h = 100;

		rect(xPos, yPos, w, h);

		sumPartsNow += parts[i];
	}


	// OPTION 2
	var sumPartsNow = 0;
	for (var i = 0; i < parts.length; i++) {

		// encrease the current sum at the start of the loop
		sumPartsNow += parts[i];

		var xPos = map(sumPartsNow, 0, sumPartsTotal, 0, width);
		var yPos = 100;

		// change drawing direction
		var w = -map(parts[i], 0, sumPartsTotal, 0, width);
		var h = 100;

		rect(xPos, yPos, w, h);
	
	}
}
