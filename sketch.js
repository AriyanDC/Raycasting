let rays = [];
let obstacles = [];
const rayAmount = 100;
const step = 360 / rayAmount;
// let sl;
// let sly;

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < rayAmount; i++) {
        rays[i] = new Ray(30, 200, i * step);

    }
    o = new Obstacle(300, 100, 300, 300)
        // sl = createSlider(.1, 1, 0, .1);
        // sly = createSlider(.1, 1, 0, .1);
}

function draw() {

    // r.dir.x = sl.value();
    // r.dir.y = sly.value();

    background(130);
    rays.forEach(r => {

        let pt = r.cast(o);
        if (pt) {
            fill(255);
            ellipse(pt.x, pt.y, 10);
        }
        r.pos.set(mouseX, mouseY);

        r.display();
    });
    o.display();

}