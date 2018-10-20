// declare number of cols and rows globaly
var numOfCols;
var numOfRows;

function setup() {

    createCanvas(500,500);
    frameRate(10);

    // initialize cols & rows to avoid blank screen at start 
    numOfCols = 10;
    numOfRows = 10;
}


function draw() {

	// calculate the number of cols and rows when mice is moving over the canvas
	// this is used to avoid too many rows and columns when the mouse is outside the canvas
	defaultCanvas0.addEventListener('mousemove', function(){ 

	    // number of rows & columns based on the mouse position
	    numOfCols = mouseX / 5;
	    numOfRows = mouseY / 5;
    }, false);

    var tileWidth = width / numOfCols;
    var tileHeight = height / numOfRows;

    for(var yPos = 0; yPos < height; yPos += tileHeight) {
        for(var xPos = 0; xPos < width; xPos += tileWidth) {

            rect(xPos, yPos, tileWidth, tileHeight);
        }
    }
}
