class Ray {
    constructor(x, y, dirx, diry) {
        this.pos = createVector(x, y);
        this.dir = createVector(dirx, diry)
    }

    display = () => {
        push()
        translate(this.pos.x, this.pos.y);
        stroke(0, 255, 0);
        line(0, 0, this.dir.x * 50, this.dir.y * 50)
        pop()
    }

    cast = obs => {

        const x1 = obs.a.x;
        const x2 = obs.b.x;
        const x3 = this.pos.x;
        const x4 = this.pos.x + this.dir.x;
        const y1 = obs.a.y;
        const y2 = obs.b.y;
        const y3 = this.pos.y;
        const y4 = this.pos.y + this.dir.y;


        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        const t = (x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4) / den
        const u = (x1 - x3) * (y1 - y2) - (y1 - y3) * (x1 - x2) / den



    }
}