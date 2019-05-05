let font;

function preload() {
	opentype.load('data/FreeSans.otf', function(err, f) {		// 'load' is asynchronous
		if(err)
			console.log(err);
		else {
			font = f;
			noLoop(); 								// if font loaded sucessfuly, we don't need loop anymore
		}
	});
}

function setup() {
	createCanvas(500,500);	
}

function draw(){

	if(!font) return; 								// restart the draw() loop untill the font is loaded
	translate(40, 300);								// shift the text on the screen

	let path = font.getPath("ABC", 0, 0, 200);		// get the opentype.js path of the text
													// console.log(path);
	path = new g.Path(path.commands);				// convert opentype.js path to g.js path												
	path = g.resampleByLength(path, 10); 			// resample the path with sample rate 10 pixels
													// console.log(path);
	fill(0);
	noStroke();
	let diameter = 5;

	for (let i=0; i < path.commands.length; i++) {	// draw the point from the path
		let pnt = path.commands[i];
		ellipse(pnt.x, pnt.y, diameter, diameter);
	}
}