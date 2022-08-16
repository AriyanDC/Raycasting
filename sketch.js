let r;
let o;
// let sl;
// let sly;

function setup() {
    createCanvas(400, 400);
    r = new Ray(30, 200, .5, .1);
    o = new Obstacle(300, 100, 300, 300)
        // sl = createSlider(.1, 1, 0, .1);
        // sly = createSlider(.1, 1, 0, .1);
}

function draw() {

    // r.dir.x = sl.value();
    // r.dir.y = sly.value();

    background(130);
    r.display();
    o.display();
    r.lookAt(mouseX, mouseY);
    let pt = r.cast(o);
    if (pt) {
        fill(255);
        ellipse(pt.x, pt.y, 10);
    }

}