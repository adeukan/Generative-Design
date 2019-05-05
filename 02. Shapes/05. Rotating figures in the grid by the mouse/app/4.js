var numOfTiles = 10;
var tileWidth;
var img;

function preload() {
  img = loadImage("pics/pic.svg");
}


function setup() {
	createCanvas(600,600);
	img.loadPixels();
	imageMode(CENTER);
}

function draw() {

	// clear();
	background(250,220,220);
	
	tileWidth = width / numOfTiles;
	translate(tileWidth/2, tileWidth/2);

	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			let posX = x*tileWidth;
			let posY = y*tileWidth;

			// rect(posX,  posY,  tileWidth,  tileWidth);

			let angle = atan2(mouseY - posY, mouseX - posX);

			push();
				translate(posX,posY);
				rotate(angle);

				scale(.9);
				image(img, 0, 0, tileWidth, tileWidth);
			pop();

		}
	}
}