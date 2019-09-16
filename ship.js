class Ship {
    constructor() {
        this.angle = 0
    }

    show() {
        noStroke()

        push()
        rotate(this.angle)
        rectMode(CENTER)
        triangle(0, -10, -5, 5, 5, 5)
        pop()
    }

    rotate() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.angle += 5
        } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.angle -= 5
        }

        if (this.angle === 360) {
            this.angle = 0
        } else if (this.angle === -360) {
            this.angle = 0
        }
    }
}