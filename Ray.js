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

}