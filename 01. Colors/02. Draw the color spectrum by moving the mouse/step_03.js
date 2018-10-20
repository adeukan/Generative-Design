var numOfCols;
var numOfRows;

function setup() {

    createCanvas(500,500);
    frameRate(10);

    // 500 hues, 500 gradations of saturation, 100 gradations of brightness
    colorMode(HSB, width, height, 100);
    
    numOfCols = 10;
    numOfRows = 10;

    // drawing mode without stroke 
    noStroke();
}


function draw() {

	defaultCanvas0.addEventListener('mousemove', function(){ 

	    numOfCols = mouseX / 5;
	    numOfRows = mouseY / 5;
    }, false);

    var tileWidth = width / numOfCols;
    var tileHeight = height / numOfRows;

    for(var yPos = 0; yPos < height; yPos += tileHeight) {
        for(var xPos = 0; xPos < width; xPos += tileWidth) {
            // hue step depends on the number of rows
            // saturation step depends on the number of columns
            // brightness does not change
            fill(xPos, height-yPos, 100);
            rect(xPos, yPos, tileWidth, tileHeight);
        }
    }
}

// save the current canvas as png file
function keyPressed() {
    if(key=='s' || key=='S') saveCanvas(gd.timestamp() + '_MouseX:' + mouseX + '_MouseY:' + mouseY,'png');
}
