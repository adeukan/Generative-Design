var numOfTiles = 20;

function setup() {
  createCanvas(600, 600);
  noFill();
}

function draw() {

  background(250,220,220);
  tileWidth = width / numOfTiles;
  translate(tileWidth/2, tileWidth/2);

  for (var y = 0; y < height; y += tileWidth) {
    for (var x = 0; x < width; x += tileWidth) {

      
      var distance = dist(mouseX, mouseY, x, y);          // distance between the start point of each tile and mouse position
      var diameter = distance / width * 40;               // diameter depends on the distance

      // rect(x, y, tileWidth, tileWidth);

      push();
        translate(x, y);
        ellipse(0, 0, diameter, diameter);
      pop();
    }
  }
}


function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
