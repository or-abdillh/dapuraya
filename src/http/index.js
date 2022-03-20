import axios from 'axios'

const baseURL = 'http://localhost:8000'
const headers = { 'Content-Type': 'application/json' }

export default {
	async get(url, callback, head = { headers }) {
		try {
			const response = await axios.get(baseURL + url, head)
			callback(response.data)
		} catch(err) {
			callback(err)
		}
	},
	async post(url, body, callback, head = { headers }) {
		try {
			const response = await axios.post(baseURL + url, body, head)
			callback(response)
		} catch(err) {
			callback(err)
		}
	}
}
