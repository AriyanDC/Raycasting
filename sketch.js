let r;

function setup() {
    createCanvas(400, 400);
    r = new Ray(30, 200, 1, 0);
}

function draw() {
    background(130);
    r.display();
}