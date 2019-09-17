class Asteroid {
	constructor (size, x, y) {
		this.velocity = createVector(random(-1, 1), random(-1, 1))
		this.size = size
		if (x && y) {
			this.pos = createVector(x, y)

		} else {
			this.pos = createVector(floor(random((-width/2)+20, (width/2)-20)),floor(random((-height/2)+20, (height/2)-20)))
		}
	}

	pickLocation () {
		if (!this.pos) {
			// TODO!
		}
	}

	show () {

		noStroke()
		fill(255)
		ellipse(this.pos.x, this.pos.y, this.size)

	}

	update () {
		this.pos.x += this.velocity.x
		this.pos.y += this.velocity.y
	}
}
