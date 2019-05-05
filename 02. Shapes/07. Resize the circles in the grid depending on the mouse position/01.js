var numOfTiles = 10;
var tileWidth;

function setup() {
	createCanvas(600,600);
	noFill();
}

function draw() {

	background(250,220,220);

	tileWidth = width / numOfTiles;
	translate(tileWidth/2, tileWidth/2);
	
	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			let posX = x * tileWidth;
			let posY = y * tileWidth;

			// rect(posX, posY, tileWidth, tileWidth)

			ellipse(posX,  posY,  tileWidth,  tileWidth);
		}
	}
}