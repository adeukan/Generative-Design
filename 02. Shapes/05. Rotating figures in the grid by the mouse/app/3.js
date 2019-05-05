var numOfTiles = 10;
var tileWidth;
var shapes;

function preload() {
    shapes = [];
    shapes.push(loadImage("pics/pic.svg"));
    console.log(shapes[0]);
}

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    imageMode(CENTER);
}

function draw() {

    clear();
    tileWidth = width / numOfTiles;

    for (let y = 0; y < numOfTiles; y++) {
        for (let x = 0; x < numOfTiles; x++) {

            let posX = tileWidth * x + tileWidth / 2;
            let posY = tileWidth * y + tileWidth / 2;

            rectMode(CENTER);
            rect(posX, posY, tileWidth, tileWidth);

            let angle = atan2(mouseX - posX, mouseY - posY);

            push();

	            translate(posX, posY);
	            rotate(angle - 45);

	            scale(.9);
	            image(shapes[0], 0, 0, tileWidth, tileWidth);

            pop();
        }
    }
}