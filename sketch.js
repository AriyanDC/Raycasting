let rays = [];
let obstacles = [];
const obstacleAmount = 5;
const rayAmount = 360;
const step = 360 / rayAmount;
// let sl;
// let sly;

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < rayAmount; i++) {
        rays[i] = new Ray(30, 200, i * step);
    }

    for (let i = 0; i < obstacleAmount; i++) {
        const r = random(50, width - 50)
        obstacles[i] = new Obstacle(r, r + random(50), r + 100, r);
    }
    // sl = createSlider(.1, 1, 0, .1);
    // sly = createSlider(.1, 1, 0, .1);
}

function draw() {

    // r.dir.x = sl.value();
    // r.dir.y = sly.value();

    background(130);
    rays.forEach(r => {
        let pt = [];
        r.infiniteLine = true;
        obstacles.forEach((o) => {
            o.display();
            r.pos.set(mouseX, mouseY);
            let casted = r.cast(o)
            if (casted) {
                pt.push(casted);
            }



        })
        if (pt.length > 0) {
            let record = createVector(Infinity, Infinity);


            pt.forEach(p => {
                if (p) {
                    if (dist(r.pos.x, r.pos.y, p.x, p.y) < dist(r.pos.x, r.pos.y, record.x, record.y)) {
                        record = p;
                    }
                }
            });



            fill(255);
            ellipse(record.x, record.y, 10);
            stroke(255, 255, 0)
            line(r.pos.x, r.pos.y, record.x, record.y)
            r.infiniteLine = false;
        } else {
            r.infiniteLine = true;
        }
        r.display();
    });

}