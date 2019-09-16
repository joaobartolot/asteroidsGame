/*
TODO:
    - Delete the shots if it past the width or height
*/
let ship
let shots = []

function setup() {
    createCanvas(500, 500)
    angleMode(DEGREES)

    ship = new Ship(width / 2, height / 2)
}

function draw() {
    background(70)

    ship.show()
    ship.rotate()

    if (shots.length != 300) {
        let shot = new Shot(ship.angle)
        shots.push(shot)
    }

    for (let i = 0; i < shots.length; i++) {
        shots[i].show()
        shots[i].update()
    }

}