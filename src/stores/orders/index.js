import { defineStore } from 'pinia'

export const useOrders = defineStore('orders', {
	state() {
		return {
			carts: [],
			amount: 0,
			total: 0
		}
	},
	actions: {
		fillOrder(payload) {
			const id = payload.productId
			let currentDuplicate;

			if ( this.carts.length > 0 ) {
				this.carts.forEach((item, x) => {
					if (item.productId === id) {
						this.carts[x] = payload
						currentDuplicate = item.productId
					}
				})
			}

			if ( payload.productId !== currentDuplicate ) this.carts.push(payload)
		},
		restore() {
			[this.total, this.amount, this.carts] = [0, 0, []]
		}
	}
})
