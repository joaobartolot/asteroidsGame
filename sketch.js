/*
TODO:
	- Create random skills after player achieved a new level!
*/
let ship, player
let asteroidNumber = 100

let shots = []
let asteroids = []

let div

function setup() {
    div = createDiv("Score: 0").size(window.innerWidth, 20).style("background:transparent;color:white;position:absolute;")
    createCanvas(window.innerWidth, window.innerHeight - 5)
    angleMode(DEGREES)

    ship = new Ship()
    player = new Player()

}

function draw() {
    background(0)
    translate(width / 2, height / 2)

    ship.show()
    ship.rotate()
    ship.boost()
    ship.update()

    if (asteroids.length < asteroidNumber) {
        asteroids.push(new Asteroid(floor(random(30, 50))))
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
                // Update the player score
                player.scoreUp(aster)
                // Update the score text
                div.html(`Score: ${player.score}`)

                // Remove the asteroid and the shot that got hit
                asteroids.splice(index, 1)
                shots.splice(index2, 1)

                // Create 2 new asteroids with half of the size
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

        // Remove the shots from the array
        if (d > width) {
            shots.splice(index, 1)
        }
    })

}

function keyPressed() {
    if (keyCode === 32) {
        let shot = new Shot(ship)
        shots.push(shot)
    }
    if (keyCode === 82) {
        asteroids = []
        shots = []
        ship = new Ship()
        loop()
    }
}
