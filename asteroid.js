class Asteroid {
	constructor (size, x, y) {
		this.velocity = createVector(random(-1, 1), random(-1, 1))
		this.size = size
		if (x && y) {
			this.pos = createVector(x, y)

		}
	}

	pickLocation () {
		if (!this.pos) {
			let position = floor(random(0, 4))
			let posX, posY

			if (position === 0) {
				posX = floor(random((-width/2), (width/2)))
				posY = floor(random((-height/2)-30, (-height/2)-90))
			} else if (position === 1) {
				posX = floor(random((width/2)+30, (width/2)+90))
				posY = floor(random((-height/2), (height/2)))
			} else if (position === 2) {
				posX = floor(random((-width/2), (width/2)))
				posY = floor(random((height/2)+30, (height/2)+90))
			} else if (position === 3) {
				posX = floor(random((-width/2)-30, (-width/2)-90))
				posY = floor(random((-height/2), (height/2)))
			}

			this.pos = createVector(posX, posY)
		}
	}

	show () {

		push()
		noFill()
		stroke(255)
		ellipse(this.pos.x, this.pos.y, this.size)
		pop()

	}

	update () {
		this.pos.add(this.velocity)
	}
}
