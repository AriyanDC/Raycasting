let r;
let o;

function setup() {
    createCanvas(400, 400);
    r = new Ray(30, 200, 1, 0);
    o = new Obstacle(300, 100, 350, 300)
}

function draw() {
    background(130);
    r.display();
    o.display();

    let pt = r.cast(wall);
    if (pt) {
        fill(255);
        ellipse(pt.x, pt.y);
    }
}