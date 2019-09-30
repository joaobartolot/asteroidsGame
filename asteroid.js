class Asteroid {
	constructor(size, x, y) {
		this.velocity = p5.Vector.random2D()
		this.size = size
		this.numPoint = floor(random(5, 15))

		this.offset = []

		for (let i = 0; i < this.numPoint; i++)
			this.offset[i] = random(-5, 5)

		if (x && y) {
			this.pos = createVector(x, y)
		}
		this.pickLocation()
	}

	pickLocation() {
		if (!this.pos) {
			let position = floor(random(0, 4))
			let posX, posY

			if (position === 0) {
				posX = floor(random((-width / 2), (width / 2)))
				posY = floor(random((-height / 2) - 30, (-height / 2) - 90))
			} else if (position === 1) {
				posX = floor(random((width / 2) + 30, (width / 2) + 90))
				posY = floor(random((-height / 2), (height / 2)))
			} else if (position === 2) {
				posX = floor(random((-width / 2), (width / 2)))
				posY = floor(random((height / 2) + 30, (height / 2) + 90))
			} else if (position === 3) {
				posX = floor(random((-width / 2) - 30, (-width / 2) - 90))
				posY = floor(random((-height / 2), (height / 2)))
			}

			this.pos = createVector(posX, posY)
		}
	}

	show() {

		push()
		noFill()
		stroke(255)
		// ellipse(this.pos.x, this.pos.y, this.size)

		beginShape()
		for (let i = 0; i < this.numPoint; i++) {
			let angle = map(i, 0, 10, 0, 360)
			let r = (this.size / 2) + this.offset[i]
			let x = r * cos(angle)
			let y = r * sin(angle)
			vertex(x + this.pos.x, y + this.pos.y)
		}
		endShape(CLOSE)
		pop()

	}

	update() {
		this.pos.add(this.velocity)
	}
}
