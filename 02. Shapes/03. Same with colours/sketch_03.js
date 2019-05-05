var radius;
var numOfSectors; // сколько углов или секторов имеет фигура
var angle;
var strokeColor;


function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    noFill(); // без заполнения цветом
    strokeWeight(2);
    stroke(0, 25); // прозрачность 25%
    strokeColor = color(0, 10); // начальный цвет обводки
}


function draw() {

    // limit mouse coordinates to canvas
    let mX = constrain(mouseX, 0, width);
    let mY = constrain(mouseY, 0, height);
    console.log(mX, mY);

    // прорисовка происходит когда нажата левая клавиша мыши
    if (mouseIsPressed && mouseButton == LEFT) {


        push(); // start a new drawing state

        // сдвинуть начало координат в центр канвы
        translate(width/2, height/2);

        // число секторов зависит от положения мыши по оси Y
        numOfSectors = int(map( mY,  0, height,  3, 10));

        // узнаём угол сектора
        angle = 360 / numOfSectors;

        // радиус зависит от положения мышки по оси X (минимальное значение в середине канвы)
        radius = map(mX,  width/2, width-1,  1, width/2);

        // дополнительный угол для поворота фигуры зависит от положения мыши по оси Y
        var offset = map(mY,  0, height,  1, 250);

        // цвет обводки
        stroke(strokeColor);

        // начинаем фигуру
        beginShape();
        for (let i = 0; i < numOfSectors; i++) {
            let x = cos(angle * i + offset) * abs(radius);  // abs() returns absolute value
            let y = sin(angle * i + offset) * abs(radius);
            
            vertex(x, y);
        }
        // заканчиваем фигуру
        endShape(CLOSE); 

        pop(); // restore original drawing state
    }
}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(0, 0, 100);
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') strokeColor = color(0, 10);
  if (key == '2') strokeColor = color(192, 100, 64, 10);
  if (key == '3') strokeColor = color(52, 100, 71, 10);
}