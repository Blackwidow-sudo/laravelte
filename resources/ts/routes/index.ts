import routes from './routes'
import page from 'page'
import { writable } from 'svelte/store'
import { Route } from '../types'

const currentRoute = writable<Route>()

// Register each route with page.js
function registerRoutes() {
	routes?.forEach(route => {
		page(route.path, () => {
			currentRoute.set(route)
		})
	})
}

// Start page.js
function startRouter() {
	registerRoutes()

	page.start()
}

export { routes, startRouter, currentRoute }
