var numOfTiles = 3;
var tileWidth;

function setup() {
	createCanvas(600,600);
	angleMode(DEGREES);
	noFill();
}

function draw() {

	tileWidth = width / numOfTiles;

	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			rotate(2);

			push();

				translate(tileWidth*x, tileWidth*y);

				rect(0,  0, tileWidth,  tileWidth)

				ellipseMode(CORNER);
				ellipse(0,  0,  tileWidth,  tileWidth );

			pop();
		}
	}
}