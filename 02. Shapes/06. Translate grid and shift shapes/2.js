var numOfTiles = 10;
var tileWidth;

let strokeColor;
var minRadius = 10;
var maxRadius = 50;
var minStroke = 1;
var maxStroke = 5;

function setup() {
	createCanvas(600,600);
	angleMode(DEGREES);
	noFill();
	strokeColor = color(255,0,0,125);
}

function draw() {

	clear();
	tileWidth = width / numOfTiles;
	translate(tileWidth/2, tileWidth/2);

	// радиус и контур зависят от мышки
	let radius = map(constrain(mouseX, 0, width-1), 0, width-1, minRadius, maxRadius);
	let circleStroke = map(constrain(mouseY, 0, height-1), 0, height-1, minStroke, maxStroke);
	
	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			let posX = x*tileWidth;
			let posY = y*tileWidth;

			// strokeWeight(1);
			// rect(posX, posY, tileWidth, tileWidth)

			stroke(strokeColor);
			strokeWeight(circleStroke);

			ellipse(posX,  posY,  radius*2,  radius*2);
		}
	}
}