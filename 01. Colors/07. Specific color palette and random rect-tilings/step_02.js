function setup() {
	createCanvas(600, 600);
	colorMode(HSB, 360, 100, 100, 100);
}


function draw() {

	noLoop();

	// row count and row height
	var rowCount = int(random(5, 30));
	var rowHeight = height / rowCount;

	// calculate and draw each next row (start from the last row)
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
			// encrease the yPos for each next row
			var yPos = i * rowHeight;

			var w = -map(parts[j], 0, sumPartsTotal, 0, width);
			// now the row height is not fixed value
			var h = rowHeight;

			rect(xPos, yPos, w, h);
		}
	}
}