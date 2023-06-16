<script>
	import Moon from '$lib/components/icons/Moon.svelte';
	import Sun from '$lib/components/icons/Sun.svelte';
	import { THEME_KEY } from '$lib/util/constants';
	import { browser } from '$app/environment';

	let darkMode = true;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (
			localStorage[THEME_KEY] === 'dark' ||
			(!(THEME_KEY in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

<button
	on:click={handleSwitchDarkMode}
	class:border-gray-200={darkMode}
	class:border-gray-400={!darkMode}
	class:bg-gray-600={darkMode}
	class:bg-gray-200={!darkMode}
	class="relative flex h-6 w-12 items-center rounded-full border bg-gray-200"
>
	<span
		class:translate-x-6={darkMode}
		class:translate-x-0={!darkMode}
		class:bg-primary-dark={darkMode}
		class:bg-primary-light={!darkMode}
		class="absolute m-px flex h-5 w-5 items-center justify-center rounded-full transition-transform"
	>
		{#if darkMode}
			<Sun classList="h-4 w-4 text-white" />
		{:else}
			<Moon classList="h-4 w-4" />
		{/if}
	</span>
</button>
