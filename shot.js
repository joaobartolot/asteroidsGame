class Shot {
    constructor(angle) {
        this.velocity = 1
        this.pos = createVector(0, -10)
        this.angle = angle
    }

    show() {
        translate(width / 2, height / 2)
        rotate(this.angle)
        fill(255)
        ellipse(this.pos.x, this.pos.y, 10)
    }

    update() {
        this.pos.y -= this.velocity
    }
}