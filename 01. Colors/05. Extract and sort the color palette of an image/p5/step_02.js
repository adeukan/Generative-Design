'use strict';
var img;

// array of color objects (colours of all tiles)
var palette = [];


function preload() {
  img = loadImage("pictures/pic1.jpg");
}


function setup() {
  createCanvas(600, 600);
  noLoop();
}


function draw() {

  img.loadPixels();

  var tileCount = 20;
  var tileSize = width / tileCount;

  // loop with the same structure as the drawing loop; used to get the tile colours
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      // gridX - tile number in the row
      // px,py - first pixel of the current tile
      // the color of the first pixel will be used for the whole tile
      var px = int(gridX * tileSize);
      var py = int(gridY * tileSize);

      // 'i' - array member which heads the group of first pixel inside 'img.pixels'
      // the colour of each pixel is represented by 4 members in 'img.pixels' array
      var i = (py * img.width + px) * 4;

      // get the color object of the first pixel of the current tile
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);

      // add the colour to palette
      // each color matches the tile on the canvas
      palette.push(c);

    }
  }

  // check the palette
  console.log(palette);

  // color index in the palette
  var i = 0;

  // drawing loop
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      // set the tile colour
      fill(palette[i]);
      rect(gridX * tileSize, gridY * tileSize, tileSize, tileSize);

      // next colour from the palette
      i++;
    }
  }
}