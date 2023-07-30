import { defineConfig } from 'vite'

import { svelte } from '@sveltejs/vite-plugin-svelte'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
	plugins: [
		laravel({
			input: ['resources/ts/app.ts'],
			refresh: true
		}),
		svelte()
	],
	resolve: {
		alias: {
			$: '/resources/ts'
		}
	}
})
