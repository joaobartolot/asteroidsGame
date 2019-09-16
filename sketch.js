/*
TODO:
    - Delete the shots if it past the width or height
*/
let ship
let shots = []

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

    shots.forEach(element => {
        element.show()
        element.update()
    })

    shots.forEach((element) => {
        let d = dist(element.pos.x, element.pos.y, 0, 0)

        if (d > 500) {
            shots.shift()
        }
    })
}

function keyPressed() {
    if (keyCode === 32) {
        let shot = new Shot(ship.angle)
        shots.push(shot)
    }
}