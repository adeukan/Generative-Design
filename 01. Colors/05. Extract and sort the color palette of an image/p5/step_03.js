'use strict';
var img;
// array of color objects (colours of all tiles)
var palette = [];
// initialize the sorting mode
var sortMode = null;


function preload() {
  img = loadImage("pictures/pic1.jpg");
}


function setup() {
  createCanvas(600, 600);
  noStroke();
  // noLoop();
}


function draw() {

  img.loadPixels();

  // clear the palette
  // palette contains new set of colors at each iteration of draw()
  palette = [];

  // var tileCount = 20;

  // the number of tiles in a row depends on mouseX and varies from 1 to 200
  var tileCount = floor( map(mouseX, width-1, 0, 1, 200) );
  var tileSize = width / tileCount;


  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var px = int(gridX * tileSize);
      var py = int(gridY * tileSize);

      var i = (py * img.width + px) * 4;

      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      palette.push(c);

    }
  }

  // sort colours in the palette based on the value of sortMode
  // chroma.js library should be connected
  gd.sortColors(palette, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      fill(palette[i]);
      rect(gridX * tileSize, gridY * tileSize, tileSize, tileSize);
      i++;
    }
  }
}

function keyReleased() {

  // save palette as ase swatch
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(palette)], gd.timestamp(), 'ase');

  // save canvas as png file
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  // picture switching
  if (key == '1') img = loadImage('pictures/pic1.jpg');
  if (key == '2') img = loadImage('pictures/pic2.jpg');
  if (key == '3') img = loadImage('pictures/pic3.jpg');
  if (key == '4') img = loadImage('pictures/pic4.jpg');

  // sorting modes
  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}