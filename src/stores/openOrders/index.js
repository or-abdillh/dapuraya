import { defineStore } from 'pinia'

export const useOpenOrders = defineStore('openOrders', {
	state() {
		return {
			openOrders: [],
			current: ''
		}
	},
	actions: {
		fillOpenOrders(arr) {
			this.openOrders = arr
		},
		fillCurrent(item) {
			this.current = item
		}
	}
})
