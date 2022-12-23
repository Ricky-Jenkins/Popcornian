<script>
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
	import { darkTheme } from "../store/store";

	// So we can use class:dark
	$: dark = $darkTheme
</script>

<div class="app" class:dark>
	<Header />
	<main class="w-full h-full dark:bg-neutral-800 bg-white">
		<slot />
	</main>
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		overflow-y: hidden;
		overflow-x: hidden;
	}

	main {
		flex: 1;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
