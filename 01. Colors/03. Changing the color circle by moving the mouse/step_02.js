const radius = 200;
// initial number of segments
var segmentCount = 4;

function setup() {
    createCanvas(500,500);
    colorMode(HSB, 360, 100, 100);
    background(0, 80, 80);
    noLoop();
}

function draw() {

    // calculate the increment angle value (90°)
    var angleIncrement = 360 / segmentCount;

    beginShape(TRIANGLE_FAN);
        vertex(width/2, height/2);

        //     vertex(width/2 + radius, height/2);
        //     vertex(width/2, height/2 + radius);
        //     vertex(width/2 - radius, height/2);
        //     vertex(width/2, height/2 - radius);
        //     vertex(width/2 + radius, height/2);

        // increase angle by the loop (90°, 180°, 270°, 360°)
        for(var angle = 0; angle <= 360; angle += angleIncrement) {

            // calculate X & Y of each next vertex
            var vx = width/2 + radius * cos(radians(angle));
            var vy = height/2 + radius * sin(radians(angle));

            // hue of each next segment within the range between 0 and 360
            fill(angle, 100, 100);

            // each next vertex
            vertex(vx, vy);
        }

        // final vertex
        vertex(width/2 + radius, height/2);
    endShape();
}
