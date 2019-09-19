/*
TODO:
	- Create random skills after player achieved a new level!
*/
let ship
let asteroidNumber = 50

let shots = []
let asteroids = []

function setup() {
    createCanvas(500, 500)
    angleMode(DEGREES)

    ship = new Ship()
}

function draw() {

    background(70)
    translate(width / 2, height / 2)

    ship.show()
    ship.rotate()
	ship.move()

    if (asteroids.length < asteroidNumber) {
        let asteroid = new Asteroid(floor(random(30, 50)))
		asteroid.pickLocation()
        asteroids.push(asteroid)
    }


    asteroids.forEach((aster, index) => {
        aster.show()
        aster.update()

        if (ship.death(aster)) {
			console.log('You died!')
            noLoop()
        }

        let d = dist(aster.pos.x, aster.pos.y, 0, 0)

        if (d > width) {
            asteroids.splice(index, 1)
        }

        shots.forEach((element, index2) => {
            if (element.hits(aster)) {
                asteroids.splice(index, 1)
                shots.splice(index2, 1)

                if (aster.size > 17) {
                    let new1 = new Asteroid(aster.size / 2, aster.pos.x, aster.pos.y)
                    let new2 = new Asteroid(aster.size / 2, aster.pos.x, aster.pos.y)

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
        let shot = new Shot(ship.angle, ship.pos)
        shots.push(shot)
    }
	if (keyCode === 82) {
		asteroids = []
		shots = []
		ship = new Ship()
		loop()
	}
}
