<script lang="ts">
	import user from '../stores/user'

	const credentials = {
		email: 'mcornehl@mkw.eu',
		password: 'password'
	}

	function onSubmit() {
		user.login(credentials)
	}
</script>

<div>
	<form
		class="flex flex-col gap-2 max-w-md mx-auto"
		on:submit|preventDefault={onSubmit}>
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
			type="submit"
			value="Sign up" />
	</form>
</div>
