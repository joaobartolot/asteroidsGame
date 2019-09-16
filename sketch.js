let ship

function setup() {
    createCanvas(500, 500)
    angleMode(DEGREES)

    ship = new Ship(width / 2, height / 2)
}

function draw() {
    background(70)

    ship.show()
    ship.rotate()
    ship.shot()
}