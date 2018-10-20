function setup() {

    createCanvas(500,500);

    // draw() is triggered 10 times per second
    frameRate(10);
}


function draw() {

    // fixed number of columns and rows
    var numOfCols = 10;
    var numOfRows = 10;

    // calculate tile width and height
    var tileWidth = width / numOfCols;
    var tileHeight = height / numOfRows;

    // nested loop to draw the tiles
    for(var yPos = 0; yPos < height; yPos += tileHeight) {
        // draw one row
        for(var xPos = 0; xPos < width; xPos += tileWidth) {
            // draw each next tile
            rect(xPos, 0, tileWidth, tileHeight);
        }
    }
}
