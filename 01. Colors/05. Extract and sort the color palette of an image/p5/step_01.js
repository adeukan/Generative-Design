'use strict';

// image container
var img;

function setup() {
  createCanvas(600, 600);
  noLoop();
}

// load picture
function preload() {
  img = loadImage("pictures/pic1.jpg");
}

function draw() {

  // split image into pixel array
  img.loadPixels();
  // img.pixels contains color info of all pixels
  console.log(img.pixels);

 
  // fixed number of tiles in a row
  var tileCount = 20;
  // tiles width and height
  var tileSize = width / tileCount;


  // draw grid
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      // draw each next tile
      rect(gridX * tileSize, gridY * tileSize, tileSize, tileSize);

    }
  }
}