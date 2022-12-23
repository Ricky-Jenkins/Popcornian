<script>
	import { darkTheme } from "../store/store";
	import JButton from "$lib/ui-library/Button/JButton.svelte";

	const toggleDark = () => $darkTheme = !$darkTheme
</script>

<header class="dark:bg-neutral-900">
	<div class="corner">
		<button>N/A</button>
	</div>

	<div class="corner">
		<JButton on:click="{toggleDark}">hi</JButton>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}
	.corner {
		width: 3em;
		height: 3em;
	}
</style>
