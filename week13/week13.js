
function setup() {
    initializeFields();
    createCanvas(300, 300);
    fill(color(0x97, 0xc4, 0xFA));
    textSize(50);
    textAlign(CENTER, CENTER);
}

// -1沒選, 0,1,2有選
var choice;

function draw() {
    // 每秒60次
    background(color(0xFF, 0xFA, 0xE8));
    text("Dinner 1", 150, 50);
    text("Dinner 2", 150, 150);
    text("Dinner 3", 150, 250);
    if (choice == 0)
        ellipse(30, 50, 50, 50);
    if (choice == 1)
        ellipse(30, 150, 50, 50);
    if (choice == 2)
        ellipse(30, 250, 50, 50);
}

function mousePressed() {
    // 當mouse按下去時
    // 取出整數0.1.2
    choice = int(random(3));
}

function initializeFields() {
    choice = -1;
}
