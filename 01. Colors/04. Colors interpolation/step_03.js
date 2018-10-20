'use strict'
var numOfRows;
var numOfCols;
var colorLeft = [];
var colorRight = [];

// switch HSA and RGB
var interpolateShortest = true;

function setup() {

    createCanvas(400,400);
	numOfRows = 10;
	numOfCols = 10;

	shakeColors();

    // remove stroke
    noStroke();
    // noLoop();
}


function draw() {

    // recalculate cols and rows count if mice is moving over the canvas
    defaultCanvas0.addEventListener('mousemove', function(){
        // columns count depends on mouseX and ranges from 1 to 40
        numOfCols = Math.floor(map(mouseX, 0, width-1, 1, 40));
        // rows count should not exceed 10, as shakeColors() generates only 10 pairs of colors
        numOfRows = Math.floor(map(mouseY, 0, height-1, 1, 10));
        // width of the canvas is 400, so the mouse position varies from 0 to 399 (0 to width-1)
    }, false);

    var tileWidth = width / numOfCols;
    var tileHeight = height / numOfRows;

    for(var gridY = 0; gridY < numOfRows; gridY++) {
        for(var gridX = 0; gridX <= numOfCols; gridX++ ) {

            var posX = tileWidth * gridX;
            var posY = tileHeight * gridY;

            var colorPos = map(gridX, 0, numOfCols, 0, 1);

            var startColor = colorLeft[gridY];
            var endColor = colorRight[gridY];

            // var interColor = lerpColor(startColor, endColor, colorPos);
            
            // switching HSA and RGB
            if (interpolateShortest) {
                colorMode(RGB);
                var interColor = lerpColor(startColor, endColor, colorPos);
                colorMode(HSB);
            }
            else
                var interColor = lerpColor(startColor, endColor, colorPos);

            fill(interColor);
            rect(posX, posY, tileWidth, tileHeight);
        }
    }

}

function shakeColors() {

    for(var i = 0; i < numOfRows; i++) {
	    colorLeft[i] = color(random(250), random(250), random(250));
	    colorRight[i] = color(random(0,250), random(0,250), random(0,250));
    }
}

function keyPressed() {
    
    // save canvas as png file
    if(key=='s' || key=='S') saveCanvas(gd.timestamp(), 'png');
    
    // switching HSA and RGB
    switch(key) {
        case '1' :
            interpolateShortest = true;
            break;
        case '2':
            interpolateShortest = false;
            break;
    }   
}