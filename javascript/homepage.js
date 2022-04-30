let bg;
let value = 0;

function setup() {
    bg = loadImage('img/homepage.png');
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    push();
    background(bg);
    pop();
}