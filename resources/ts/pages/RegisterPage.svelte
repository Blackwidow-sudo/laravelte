<script lang="ts">
	import user from '../stores/user'

	const credentials = {
		name: 'Merlin',
		email: 'mcornehl@mkw.eu',
		password: 'password',
		password_confirmation: 'password'
	}

	function onSubmit() {
		user.register(credentials)
	}
</script>

<div>
	<form
		class="flex flex-col gap-2 max-w-md mx-auto"
		on:submit|preventDefault={onSubmit}>
		<input
			id="name"
			name="name"
			placeholder="Name"
			type="text"
			bind:value={credentials.name} />
		<input
			id="email"
			name="email"
			placeholder="Email"
			type="email"
			bind:value={credentials.email} />
		<input
			id="password"
			name="password"
			placeholder="Password"
			type="password"
			bind:value={credentials.password} />
		<input
			id="password-confirm"
			name="password-confirm"
			placeholder="Confirm password"
			type="password"
			bind:value={credentials.password_confirmation} />
		<input
			type="submit"
			value="Sign up" />
	</form>
</div>
