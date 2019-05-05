var numOfTiles = 20;
var tileWidth;

function setup() {
	createCanvas(600,600);
	angleMode(DEGREES);
}

function draw() {

	clear();
	stroke(0);
	strokeWeight(5);

	// same rundom numbers at every draw()
	randomSeed(2);
	// noLoop();
	
	tileWidth = width / numOfTiles;

	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			push();

				translate(x*tileWidth+tileWidth/2, y*tileWidth+tileWidth/2);
				// rotate(20);

				// rectMode(CENTER);
				// rect(0,  0,  tileWidth,  tileWidth);

				var choice = int(random(0, 2));
				// var choice = Math.floor(random(2));

				if(choice == 0) line(-tileWidth/2,  tileWidth/2,  tileWidth/2, -tileWidth/2);
				if(choice == 1) line(-tileWidth/2,  -tileWidth/2,  tileWidth/2, tileWidth/2);

			pop();
		}
	}
}
