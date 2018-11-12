/**
 * generates a specific color palette and some random 'rect-tilings' with radial gradient
 *
 * MOUSE
 * left click          : new composition
 *
 * KEYS
 * s                   : save png
 * c                   : save color palette
 */
'use strict';

var colorCount = 20;
var hueValues = [];
var saturationValues = [];
var brightnessValues = [];
var actRandomSeed = 0;
var alphaValue = 100;

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  noLoop();
  background(254);
  randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
  for (var i = 0; i < colorCount; i++) {
    if (i % 2 == 0) {
      hueValues[i] = random(180);
      saturationValues[i] = random(50);
      brightnessValues[i] = 100;
    } else {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
  }

  // counter for all parts in the canvas
  var globalPartCounter = 0;
  // row count and row height
  var rowCount = int(random(5, 30));
  var rowHeight = height / rowCount;


  // draw each next row (start from the bottom row)
  for (var i = rowCount-1; i >= 0; i--) {

    // initial number of parts in current row (may be increased later)
    // the lower row has more parts
    var rowPartCounter = i + 1;
    var parts = [];


    for (var ii = 0; ii < rowPartCounter; ii++) {
      // sub-parts or not?
      if (random() < 0.075) {
        // take care of big values
        var subParts = int(random(2, 20));
        rowPartCounter = rowPartCounter + subParts;
        for (var iii = 0; iii < subParts; iii++) {
          parts.push(random(2));
        }
      } else {
        parts.push(random(2, 20));
      }
    }

    // add all subparts
    var sumPartsTotal = 0;
    for (var ii = 0; ii < rowPartCounter; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw each next row (start from the bottom)
    var sumPartsNow = 0;
    for (var ii = 0; ii < parts.length; ii++) {

      // increasing X position here leads to the fact that tiles can overlap horizontally
      sumPartsNow += parts[ii];

      // will the current part be drawn or not ?
      if (random() < 0.45) {

        // part width & height
        var w = map(parts[ii], 0, sumPartsTotal, 0, width);
        var h = rowHeight * 1.5

        // top-left corner of the part
        var x1 = map(sumPartsNow, 0, sumPartsTotal, 0, width);
        var y1 = rowHeight * i;

        // lower-right corner of the part
        var x2 = x1 + w;
        var y2 = y1 + h;

        var index = globalPartCounter % colorCount;

        var col1 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        // create complementary color
        var col2 = color(hueValues[index] - 180, saturationValues[index], brightnessValues[index], alphaValue);

        // the gradient center will be in the center of the rect, so the radius of the gradient is based on the larger size
        centerGradient(x1, y1, 0, x2, y2, max(w, h), col1, col2);
      }

      globalPartCounter++;
    }
  }
}

function centerGradient(x1, y1, r1, x2, y2, r2, c1, c2) {

  // global canvas context p5.js var
  var ctx = drawingContext; 

  // calculate gradient center
  var cx = x1 + (x2 - x1) / 2;    // current X + half width
  var cy = y1 + (y2 - y1) / 2;    // current Y + half height

  // radial gradient with two stops
  var grd = ctx.createRadialGradient(cx, cy, r1, cx, cy, r2);
  grd.addColorStop(0, c1.toString());
  grd.addColorStop(1, c2.toString());

  // draw rect
	ctx.fillStyle = grd;
	ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}

function mouseReleased() {
  actRandomSeed = random(100000);
  loop();
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}
