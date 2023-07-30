<script lang="ts">
	import { routes, startRouter, currentRoute } from './routes'
	import { onMount } from 'svelte'
	import { Navbar, HeaderMenu } from './components/navigation'

	let open = false

	onMount(startRouter)
</script>

<header>
	<HeaderMenu
		{routes}
		on:open-nav={() => (open = !open)} />
</header>
<Navbar
	{routes}
	bind:open />
<main class="container mx-auto pt-20">
	<svelte:component this={$currentRoute?.component}></svelte:component>
</main>
