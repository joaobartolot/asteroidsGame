/*
TODO:
    - Delete the shots if it past the width or height
*/
let ship

let shots = []
let asteroids = []

function setup() {
    createCanvas(500, 500)
    angleMode(DEGREES)
    translate(width / 2, height / 2)

    ship = new Ship()
}

function draw() {
    background(70)
    translate(width / 2, height / 2)

    ship.show()
    ship.rotate()

	if (asteroids.length < 20) {
		let asteroid = new Asteroid(floor(random(20, 40)))
		asteroids.push(asteroid)
	}


	asteroids.forEach((aster, index) => {
		aster.show()
		aster.update()

        let d = dist(aster.pos.x, aster.pos.y, 0, 0)

        if (d > width) {
            asteroids.splice(index, 1)
        }

		shots.forEach((element, index2) => {
			if (element.hits(aster.pos.x, aster.pos.y)) {
				asteroids.splice(index, 1)
				shots.splice(index2, 1)

				if (aster.size > 10) {
					let new1 = new Asteroid(aster.size/2, aster.pos.x, aster.pos.y)
					let new2 = new Asteroid(aster.size/2, aster.pos.x, aster.pos.y)

					asteroids.push(new1)
					asteroids.push(new2)
				}
			}
		})
	})

    shots.forEach((element, index) => {
        element.show()
        element.update()

        let d = dist(element.pos.x, element.pos.y, 0, 0)

        if (d > width) {
            shots.splice(index, 1)
        }
    })

}

function keyPressed() {
    if (keyCode === 32) {
        let shot = new Shot(ship.angle)
        shots.push(shot)
    }
}
