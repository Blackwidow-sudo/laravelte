export interface LoginCredentials {
	email: string
	password: string
}

export interface RegisterCredentials extends LoginCredentials {
	name: string
	password_confirmation: string
}

export interface Route {
	name: string
	path: string
	component: any // SvelteComponent throws errors
}
