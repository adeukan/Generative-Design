var numOfTiles = 20;
var strWeight = 1;
var tileWidth;
// тип концов линий, параметр для strokeCap()
var capType;

function setup() {
	createCanvas(600,600);
	angleMode(DEGREES);

	// задаётся в setup() и без ковычек, это параметр P5
	capType = ROUND; 
}

function draw() {

	clear();
	stroke(0);
	strokeWeight(5);
	randomSeed(2);
	tileWidth = width / numOfTiles;

	// задать тип концов линий
	strokeCap(capType);

	
	for(let y = 0; y < numOfTiles; y++) {
		for(let x = 0; x < numOfTiles; x++) {

			push();

				translate(tileWidth*x + tileWidth/2, tileWidth*y + tileWidth/2);
				rotate(20);

				let choice = int(random(0, 2));
				if(choice == 0) {
					strWeight = map(mouseX, 0,width, 1,10);
					strokeWeight(strWeight);
					line(-tileWidth/2,  tileWidth/2,  tileWidth/2, -tileWidth/2);
				}
				else {
					strWeight = map(mouseY, 0 , width, 1, 10);
					strokeWeight(strWeight);
					line(-tileWidth/2,  -tileWidth/2,  tileWidth/2, tileWidth/2);
				}

			pop();
		}
	}
}


function keyReleased() {

	if     (key == '1')		capType = SQUARE;
	else if(key == '2')		capType = ROUND;
	else if(key == '3')		capType = PROJECT;
}