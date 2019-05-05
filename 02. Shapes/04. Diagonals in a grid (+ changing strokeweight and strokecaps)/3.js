var numOfTiles = 3;
var tileWidth;

function setup() {
	createCanvas(600,600);
	angleMode(DEGREES);
}

function draw() {

	fill(0); // black
	tileWidth = width / numOfTiles;
	
	stroke(255); // white stroke
	strokeWeight(1);

	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			push();
				// shift the coordinate system to the next tile
				translate( tileWidth*x + tileWidth/2,    tileWidth*y + tileWidth/2 );

				// rectangle will be rotated
				rotate(20);

				// drawing coordinates are the same at each drawing
				rectMode(CENTER);
				rect(0,  0,  tileWidth,  tileWidth);
			pop();
		}
	}
}