<script>
	import DarkModeToggle from '$lib/components/ui/DarkModeToggle.svelte';
</script>

<nav class="container mx-auto flex items-center justify-between py-10">
	<h2 class="font-bold tracking-widest">
		<a href="/">BOWDY.</a>
	</h2>

	<div class="flex items-center gap-16">
		<ul class="flex items-center gap-8">
			<li>
				<a href="/blog" class="text-primary-dark dark:text-primary-light">Blog</a>
			</li>

			<li class="text-primary-dark dark:text-primary-light">/</li>

			<li>
				<a href="/contact" class="text-primary-dark dark:text-primary-light">Contact me</a>
			</li>
		</ul>

		<DarkModeToggle />
	</div>
</nav>
