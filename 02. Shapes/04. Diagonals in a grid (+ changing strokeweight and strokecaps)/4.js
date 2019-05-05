var numOfTiles = 3;
var tileWidth;

function setup() {
	createCanvas(600,600);
	angleMode(DEGREES);
}

function draw() {

	fill(0); // black
	stroke(255); // white stroke
	tileWidth = width / numOfTiles;
	
	strokeWeight(4);

	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			push();

				translate( tileWidth*x + tileWidth/2,    tileWidth*y + tileWidth/2 );
				rotate(20);
				// scale(1/2);

				rectMode(CENTER);
				rect(0,  0,  tileWidth,  tileWidth);

				line(-tileWidth/2,  tileWidth/2,   tileWidth/2, -tileWidth/2);

			pop();
		}
	}
}


