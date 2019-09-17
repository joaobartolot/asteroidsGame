class Shot {
    constructor(angle) {
        this.pos = createVector(0, 0)
        this.velocity = createVector(cos(angle), sin(angle))
    }

    hits(asteroidX, asteroidY, asteroidSize) {
        let distance = dist(this.pos.x, this.pos.y, asteroidX, asteroidY)

        if (distance < asteroidSize) {
            return true
        } else {
            return false
        }
    }

    show() {
        push()
        fill(255)
        ellipse(this.pos.x, this.pos.y, 5)
        pop()
    }

    update() {
        this.velocity.setMag(5)
        this.pos.x += this.velocity.x
        this.pos.y += this.velocity.y
    }
}
