<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageServerData } from './$types';
	import { gsap } from 'gsap';
	import BlogPostCard from '$lib/components/ui/BlogPostCard.svelte';

	let tl = gsap.timeline();

	onMount(() => {
		tl.fromTo(
			'.blog h1',
			{ opacity: 0, y: -40 },
			{ opacity: 1, y: 0, duration: 1, ease: 'expo.inOut' }
		).fromTo(
			'.blog__post',
			{ opacity: 0, y: 40 },
			{ opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'expo.inOut' },
			'-=0.5'
		);
	});

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Blog | Portfolio</title>
	<meta name="description" content="Blog post of software developer Bodhi Vandael" />
	<meta
		name="keywords"
		content="contact, contact-page, portfolio, software, engineer, bodhi, vandael"
	/>
	<meta name="author" content="Bodhi Vandael" />
</svelte:head>

<main class="blog container mx-auto">
	<h1 class="mt-8 text-5xl font-bold">My generous blog</h1>

	<section class="mt-8 grid grid-cols-4">
		{#each data.posts as post}
			<BlogPostCard {post} />
		{/each}
	</section>
</main>
