import { defineStore } from 'pinia'

export const useDropPoints = defineStore('dropPoints', {
	state() {
		return {
			current: ''
		}
	},
	actions: {
		fillCurrent(item) {
			this.current = item
		}
	},
	persist: true
})
