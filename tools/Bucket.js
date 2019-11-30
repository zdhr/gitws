export default class Bucket {

	constructor() {
		this.content = null
	}

	fill(liquid) {
		this.content = liquid
	}

	pour() {
		liquid = this.content
		this.content = null

		return liquid
	}
}
