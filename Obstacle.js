class Obstacle {
    constructor(ax, ay, bx, by) {
        this.a = createVector(ax, ay);
        this.b = createVector(bx, by)
    }

    display = () => {
        stroke(255, 0, 0);
        line(this.a.x, this.a.y, this.b.x, this.b.y)
    }

}