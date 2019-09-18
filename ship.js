class Ship {
	constructor() {
		this.angle = 0
		this.pos = createVector(0, 0)
	}

	death(asteroid) {
		// TODO:
		//    - Death animation
		//    - Find and fix some bugs

		let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)

		if (d < asteroid.size/2) return true

		return false
	}

	rotate() {
		if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
				this.angle += 3
		} else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
				this.angle -= 3
		}

		if (this.angle === 360) {
				this.angle = 0
		} else if (this.angle === -360) {
				this.angle = 0
		}
	}

	move() {
		this.velocity = createVector(cos(this.angle), sin(this.angle))

		if (keyIsDown(UP_ARROW)) {
			this.pos.x += this.velocity.x
			this.pos.y += this.velocity.y
		} else if (keyIsDown(DOWN_ARROW)) {
			this.pos.x -= this.velocity.x
			this.pos.y -= this.velocity.y
		}

	}

	show() {

		push()
		noFill()
		stroke(255)
		translate(this.pos.x, this.pos.y)
		rotate(this.angle)
		rectMode(CENTER)
		triangle(10, 0, -5, 5, -5, -5)
		pop()
	}
}
