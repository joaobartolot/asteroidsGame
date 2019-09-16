class Ship {
    constructor() {
        this.angle = 0
    }

    show() {
        noStroke()

        push()
        translate(width / 2, height / 2)
        rotate(this.angle)
        rectMode(CENTER)
        triangle(0, -10, -10, 10, 10, 10)
        pop()
    }

    rotate() {
        if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
            this.angle += 5
        } else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
            this.angle -= 5
        }
    }
}