const radius = 200;

function setup() {
    
    createCanvas(500,500);
    colorMode(HSB, 360, 100, 100);
    background(0, 80, 80);
    // run draw() just once
    noLoop();
}

function draw() {
    
    // draw a set of triangles with one common vertex
    beginShape(TRIANGLE_FAN);

        // common vertex
        vertex(width/2, height/2);
        // right vertex (1st)
        vertex(width/2 + radius, height/2);
        // bottom vertex
        vertex(width/2, height/2 + radius);
        // left vertex
        vertex(width/2 - radius, height/2);
        // top vertex
        vertex(width/2, height/2 - radius);
        // 1st vertex again
        vertex(width/2 + radius, height/2);

    endShape();

}
