export default class Shed {

	constructor() {
		this.tools = []
	}

	addTool(tool) {
		this.tools.push(tool)
	}

	takeTool(tool) {
		this.tools = this.tools.filter((shedTool) => shedTool !== tool)
	}
}
