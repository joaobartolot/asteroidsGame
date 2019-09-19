class Shot {
    constructor(angle, origin) {
        this.pos = createVector(origin.x, origin.y)
        this.velocity = createVector(cos(angle), sin(angle))
    }

    hits(asteroid) {
        let distance = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)

        if (distance < asteroid.size/2) {
            return true
        } else {
            return false
        }
    }

    show() {
			push()
			noStroke()
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
