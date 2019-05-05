var numOfTiles = 3;
var tileWidth;

function setup() {
	createCanvas(600,600);
	angleMode(DEGREES);
	noFill();
}

function draw() {

	tileWidth = width / numOfTiles;
	
	strokeWeight(1);

	for(let i = 0; i < numOfTiles; i++) {
		for(let j = 0; j < numOfTiles; j++) {

			rotate(2);
			
			rect(tileWidth*j,  tileWidth*i, tileWidth,  tileWidth)

			ellipseMode(CORNER);
			ellipse(tileWidth*j,  tileWidth*i,  tileWidth,  tileWidth);
			
		}
	}
}