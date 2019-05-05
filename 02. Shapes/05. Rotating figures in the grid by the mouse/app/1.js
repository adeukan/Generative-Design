var numOfTiles = 10;
var tileWidth;

function setup() {
	createCanvas(600,600);
	background(250, 220, 220);
	noFill();
}

function draw() {

	tileWidth = width / numOfTiles;
	
	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			push();

				// let posX = tileWidth*x;
				// let posY = tileWidth*y;

				// translate(posX, posY);
				
				// rect(0,  0,  tileWidth,  tileWidth);
				// line(0,  tileWidth,   tileWidth, 0);

				let posX = tileWidth*x + tileWidth/2;
				let posY = tileWidth*y + tileWidth/2;

				rectMode(CENTER);
				rect(posX,  posY,  tileWidth,  tileWidth);

				translate(posX, posY);

				// rectMode(CENTER);
				// rect(0,  0,  tileWidth,  tileWidth);

				line(-tileWidth/2,  tileWidth/2,   tileWidth/2, -tileWidth/2);

			pop();
		}
	}
}


