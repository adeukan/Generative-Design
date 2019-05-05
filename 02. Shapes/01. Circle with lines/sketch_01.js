var radius;
var numOfSectors;
var angle;
var stroke;

function setup() {
    createCanvas(300, 300);
    angleMode(DEGREES);
    strokeCap(ROUND); // закругленные концы отрезка
}


function draw() {

    background(255);

    // сдвинуть начало координат в центр канвы
    translate(width / 2, height / 2);

    // ширина линии зависит от положения мышки по оси Y
    stroke = map(mouseY,  0, height,  1, 4);
    strokeWeight(stroke);

    // число секторов зависит от положения мыши по оси Y
    // используем int чтобы исключить получение дробного числа секторов
    numOfSectors = int(map(mouseY, 0, height, 10, 50));

    // узнаём угол сектора
    angle = 360 / numOfSectors;

    // радиус зависит от положения мышки по оси X (минимальное значение в середине канвы)
    radius = map(mouseX, width/2, width-1,  1, width/2);
    // radius = mouseX - width/2;  // то же самое

    // прорисовка
    for (let i = 0; i < numOfSectors; i++) {

        let x = cos(angle * i) * abs(radius); // abs() returns absolute value
        let y = sin(angle * i) * abs(radius);

        line(0, 0, x, y);
    }
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}