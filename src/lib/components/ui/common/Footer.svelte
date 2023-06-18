<script lang="ts">
	import GitHub from '$lib/components/icons/GitHub.svelte';
	import Medium from '$lib/components/icons/Medium.svelte';
	import Twitter from '$lib/components/icons/Twitter.svelte';

	const year = new Date().getFullYear();
</script>

<footer
	class="container mx-auto mt-8 flex items-center justify-center py-16 text-primary-dark dark:text-primary-light"
>
	<div class="grid w-full grid-cols-3 items-center">
		<span>
			&copy; {year}
		</span>

		<span class="text-center">
			Made with <span class="text-red-500">&hearts;</span> by Bowdy
		</span>

		<div class="flex items-center justify-end gap-4">
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
	</div>
</footer>
