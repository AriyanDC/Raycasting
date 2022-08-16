class Ray {
    constructor(x, y, angle) {
        this.pos = createVector(x, y);
        this.dir = p5.Vector.fromAngle(angle);
        this.infiniteLine = true;
    }



    lookAt = (px, py) => {
        this.dir.set(px - this.pos.x, py - this.pos.y);
        this.dir.normalize();
    }

    display = () => {
        if (this.infiniteLine) {
            push()
            translate(this.pos.x, this.pos.y);
            stroke(255, 255, 0);
            line(0, 0, this.dir.x * width * 2, this.dir.y * height * 2)
            pop()
        }
    }

    cast = obs => {

        const x1 = obs.a.x;
        const x2 = obs.b.x;
        const x3 = this.pos.x;
        const x4 = this.pos.x + this.dir.x * width;
        const y1 = obs.a.y;
        const y2 = obs.b.y;
        const y3 = this.pos.y;
        const y4 = this.pos.y + this.dir.y * height;


        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (den == 0) return;
        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = ((x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2)) / den;

        if (t > 0 && t < 1 && u > 0) {
            return createVector(x1 + t * (x2 - x1), y1 + t * (y2 - y1))
        }


    }
}