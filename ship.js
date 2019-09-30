class Ship {
	constructor() {
		this.angle = 0
		this.pos = createVector(0, 0)
		this.velocity = createVector(0, 0)
	}

	death(asteroid) {
		// TODO:
		//    - Death animation
		//    - Find and fix some bugs

		let d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y)

		if (d < (asteroid.size / 2) + 5) return true

		return false
	}

	rotate() {
		if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
			this.angle -= 5
		} else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
			this.angle += 5
		}

		if (this.angle === 360) {
			this.angle = 0
		} else if (this.angle === -360) {
			this.angle = 0
		}
	}

	boost() {
		if (keyIsDown(UP_ARROW)) {
			this.acceleration = createVector(cos(this.angle), sin(this.angle))
			this.acceleration.mult(0.1)
			this.velocity.add(this.acceleration)
		} else if (keyIsDown(DOWN_ARROW)) {
			this.acceleration = createVector(cos(this.angle), sin(this.angle))
			this.acceleration.mult(0.1)
			this.velocity.sub(this.acceleration)
		}
	}

	update() {
		this.pos.add(this.velocity)
		this.velocity.mult(0.98)
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
