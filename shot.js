class Shot {
    constructor(angle) {
        this.velocity = 1
        this.pos = createVector(0, -10)
        this.angle = angle
    }

    show() {
        push()
        rotate(this.angle)
        fill(255)
        ellipse(this.pos.x, this.pos.y, 5)
        pop()
    }

    update() {
        this.pos.y -= this.velocity
    }
}