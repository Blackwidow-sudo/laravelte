import { writable } from 'svelte/store'
import axios from 'axios'
import type { RegisterCredentials, LoginCredentials } from '../types'

const { subscribe, set, update } = writable(null)

async function register(credentials: RegisterCredentials) {
	const { data } = await axios.post('/api/register', credentials)

	console.log(data)
}

async function login(credentials: LoginCredentials) {
	const { data } = await axios.post('/api/login', credentials)

	set(data)
}

export default {
	subscribe,
	register,
	login
}
