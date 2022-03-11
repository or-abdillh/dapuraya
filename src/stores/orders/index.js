import { defineStore } from 'pinia'

export const useOrders = defineStore('orders', {
	state() {
		return {
			items: [],
			amounts: 0,
			total: 0
		}
	},
	actions: {
		addItem(payload) {
			const id = payload.id
			let currentDuplicate;

			if ( this.items.length > 0 ) {
				this.items.forEach((item, x) => {
					if (item.id === id) {
						this.items[x] = payload
						currentDuplicate = item.id
					}
				})
			}

			if ( payload.id !== currentDuplicate ) this.items.push(payload)
		},
		getters: {
			getCurrentItem(state) {
				return state.items
			}
		}
	}
})
