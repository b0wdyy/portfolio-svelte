<script lang="ts">
	import '../app.css';
	import DarkModeToggle from '$lib/components/ui/DarkModeToggle.svelte';
</script>

<nav class="flex items-center justify-between px-20 py-10">
	<h2 class="font-bold tracking-widest">BOWDY.</h2>

	<DarkModeToggle />
</nav>
<slot />
