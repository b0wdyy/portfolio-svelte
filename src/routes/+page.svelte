<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';

	let pageLoaderContent: HTMLDivElement;
	let pageLoaderContentAfter: HTMLDivElement;
	let loaderText: HTMLParagraphElement;
	let tl = gsap.timeline();

	onMount(() => {
		tl.fromTo(
			loaderText,
			{
				letterSpacing: '40px'
			},
			{
				letterSpacing: '80px',
				duration: 0.75,
				ease: 'expo.out'
			}
		)
			.to(loaderText, {
				y: '-100%',
				duration: 0.75,
				ease: 'expo.in'
			})
			.to(pageLoaderContent, {
				height: 0,
				duration: 1.5,
				ease: 'expo.in',
				onComplete: () => pageLoaderContent?.remove()
			})
			.to(
				pageLoaderContentAfter,
				{
					height: 0,
					duration: 1.25,
					ease: 'expo.in',
					onComplete: () => pageLoaderContentAfter?.remove()
				},
				'-=0.9'
			);
	});
</script>

<div
	bind:this={pageLoaderContent}
	class="absolute inset-0 z-10 grid place-items-center overflow-hidden bg-slate-200"
>
	<div class="overflow-hidden">
		<p bind:this={loaderText} class="text-2xl !text-primary-dark">LOADING</p>
	</div>
</div>
<div
	bind:this={pageLoaderContentAfter}
	class="absolute inset-0 grid place-items-center overflow-hidden bg-slate-100"
/>
