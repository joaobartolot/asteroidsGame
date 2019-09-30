class Player {
	constructor() {
		this.name = ""
		this.score = 0
	}

	scoreUp(aster) {
		if (aster.size > 30)
			this.score += 25
		else if (aster.size > 20)
			this.score += 50
		else
			this.score += 100
	}
}
