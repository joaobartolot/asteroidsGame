class Ship {
    constructor() {
        this.angle = 0
    }

    death(asteroidX, asteroidY, asteroidSize) {
        // TODO:
        //    - Death animation
        //    - Find and fix some bugs

        let d = dist(0, 0, asteroidX, asteroidY)

        if (d < asteroidSize - 10) return true

        return false
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

    show() {
        noStroke()

        push()
        rotate(this.angle)
        rectMode(CENTER)
        triangle(10, 0, -5, 5, -5, -5)
        pop()
    }
}
