<script>
	import DarkModeToggle from '$lib/components/ui/DarkModeToggle.svelte';
	import Hamburger from './Hamburger.svelte';
</script>

<nav class="container mx-auto flex items-center justify-between px-8 py-10 lg:px-0">
	<h2 class="font-bold tracking-widest">
		<a href="/">BOWDY.</a>
	</h2>

	<div class="flex items-center justify-center gap-16">
		<ul class="hidden items-center gap-8 lg:flex">
			<li>
				<a href="/blog" class="text-primary-dark dark:text-primary-light">Blog</a>
			</li>

			<li class="text-primary-dark dark:text-primary-light">/</li>

			<li>
				<a href="/contact" class="text-primary-dark dark:text-primary-light">Contact me</a>
			</li>
		</ul>

		<DarkModeToggle />

		<Hamburger />
	</div>
</nav>
