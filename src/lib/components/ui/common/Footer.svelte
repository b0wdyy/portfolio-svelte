<script lang="ts">
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Medium from '$lib/components/icons/Medium.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';

	const year = new Date().getFullYear();
</script>

<footer
	class="container mx-auto mt-8 grid w-full gap-6 py-16 text-primary-dark dark:text-primary-light lg:grid-cols-3 lg:gap-0"
>
	<span
		class="flex h-full w-full items-center justify-center place-self-center lg:justify-normal lg:place-self-start"
	>
		&copy; {year}
	</span>

	<span class="flex items-center justify-center gap-2 text-center">
		Made with <span class="text-red-500">&hearts;</span> by Bowdy
	</span>

	<div class="flex items-center justify-center gap-2 lg:place-self-start">
		<a
			target="_blank"
			rel="noreferrer noopener"
			href="https://github.com/b0wdyy"
			class="flex items-center gap-2 p-2"
		>
			<GitHub classList="h-6 w-6 fill-primary-dark dark:fill-primary-light" />
			<span>GitHub</span>
		</a>

		&middot;

		<a
			target="_blank"
			rel="noreferrer noopener"
			href="https://medium.com/@bowdyvandael"
			class="flex items-center gap-2 p-2"
		>
			<Medium classList="w-6 h-6 fill-primary-dark dark:fill-primary-light" />
			<span>Medium</span>
		</a>

		&middot;

		<a
			target="_blank"
			rel="noreferrer noopener"
			href="https://twitter.com/b0wdyy"
			class="flex items-center gap-2 p-2"
		>
			<Twitter classList="w-6 h-6 fill-primary-dark dark:fill-primary-light" />
			<span>Twitter</span>
		</a>
	</div>
</footer>
