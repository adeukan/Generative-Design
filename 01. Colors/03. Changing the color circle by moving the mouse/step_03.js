const radius = 200;
var segmentCount = 4;

function setup() {
    createCanvas(500,500);
    colorMode(HSB, 360, 100, 100);
    // background(0, 80, 80);
    // noLoop();
}

function draw() {

	// set background on each draw() iteration to clear previous drawings
	background(0, 80, 80);

	// recalculate the segment count if mice is moving over the canvas
    defaultCanvas0.addEventListener('mousemove', function(){ 
        // scale the value of mouseX to get the number of segments between 4 and 180 
        segmentCount = Math.round(map(mouseX, 0, width, 4, 180))
    }, false);

    var angleIncrement = 360 / segmentCount;

    beginShape(TRIANGLE_FAN);
        vertex(width/2, height/2);

        for(var angle = 0; angle <= 360; angle += angleIncrement) {

            var vx = width/2 + radius * cos(radians(angle));
            var vy = height/2 + radius * sin(radians(angle));

            fill(angle, 100, 100);
            vertex(vx, vy);
        }
        vertex(width/2 + radius, height/2);
    endShape();
}


function keyPressed() {
    
	// save canvas as png file
    if(key=='s' || key=='S') saveCanvas(gd.timestamp(), 'png');
    
    // change the number of segments
    switch(key) {
        case '1' :
            segmentCount = 90;
            break;
        case '2':
            segmentCount = 45;
            break;
        case '3':
            segmentCount = 20;
            break;
    }
      
}





