export default class TicketOffice {

	constructor() {
		this.cash = 0
		this.clerk = null
	}

	clerkCheckIn(clerk) {
		this.clerk = clerk
	}

	sellTicket(ticket, bossIsLooking) {
		if (bossIsLooking) {
			this.cash += ticket.price
		} else {
			this.cash += ticket.price * 0.9
			this.clerk.stealMoney(ticket.price * 0.1)
		}
	}
}
