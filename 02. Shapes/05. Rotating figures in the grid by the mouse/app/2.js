var numOfTiles = 10;
var tileWidth;

function setup() {
	createCanvas(600,600);
	angleMode(DEGREES);
}

function draw() {

	clear();
	strokeWeight(4);
	tileWidth = width / numOfTiles;
	

	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			push();

				let posX = tileWidth*x + tileWidth/2;
				let posY = tileWidth*y + tileWidth/2;

				rectMode(CENTER);
				rect(posX,  posY,  tileWidth,  tileWidth);

				translate(posX, posY);

				let angle = atan2(mouseX - posX, mouseY - posY);
				rotate(angle + 45);

				// if(x === 0 && y === 0) console.log(angle);

				line(-tileWidth/2,  tileWidth/2,   tileWidth/2, -tileWidth/2);

			pop();
		}
	}
}


