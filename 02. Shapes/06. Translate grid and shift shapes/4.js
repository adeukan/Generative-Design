var numOfTiles = 10;
var tileWidth;
let strokeColor;
var minRadius = 10;
var maxRadius = 30;
var minStroke = 1;
var maxStroke = 5;
var actRandomSeed = 1000;

function setup() {
	createCanvas(600,600);
	noFill();
	strokeColor = color(255,0,0,125);
}

function draw() {

	clear();
	randomSeed(actRandomSeed);
	tileWidth = width / numOfTiles;
	translate(tileWidth/2, tileWidth/2);

	let radius = map(constrain(mouseX, 0, width), 0, width-1, minRadius, maxRadius);
	let circleStroke = map(constrain(mouseY, 0, height), 0, height-1, minStroke, maxStroke);
	
	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			let posX = x*tileWidth;
			let posY = y*tileWidth;

			// rect(posX, posY, tileWidth, tileWidth)

			let shiftX = random(-mouseX, mouseX) / 20;
			let shiftY = random(-mouseY, mouseY) / 20;

			stroke(strokeColor);
			strokeWeight(circleStroke);

			push();
				translate(posX,posY);
				rotate(1);
				rectMode(CENTER);
				rect(0 + shiftX,  0 + shiftY,  radius*2,  radius*2);
			pop();

		}
	}
}