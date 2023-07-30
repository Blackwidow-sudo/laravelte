import HomePage from '../pages/HomePage.svelte'
import RegisterPage from '../pages/RegisterPage.svelte'
import LoginPage from '../pages/LoginPage.svelte'

export default [
	{
		name: 'Home',
		path: '/',
		component: HomePage
	},
	{
		name: 'Register',
		path: '/register',
		component: RegisterPage
	},
	{
		name: 'Login',
		path: '/login',
		component: LoginPage
	}
]
