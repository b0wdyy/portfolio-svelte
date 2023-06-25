<script lang="ts">
	import { gsap } from 'gsap';
	import { onMount } from 'svelte';
	import AboutCard from '$lib/components/ui/AboutCard.svelte';
	import Chip from '$lib/components/ui/Chip.svelte';

	// TODO: fetch 3 first blog posts

	let pageLoaderContent: HTMLDivElement;
	let pageLoaderContentAfter: HTMLDivElement;
	let loaderText: HTMLParagraphElement;
	let tl = gsap.timeline();

	onMount(() => {
		document.body.style.overflow = 'hidden';

		tl.fromTo(
			loaderText,
			{
				letterSpacing: '20px'
			},
			{
				letterSpacing: '40px',
				duration: 0.75,
				ease: 'expo.out'
			}
		)
			.to(loaderText, {
				y: '-100%',
				duration: 0.75,
				ease: 'power3.inOut'
			})
			.to(pageLoaderContent, {
				height: 0,
				duration: 1.5,
				ease: 'power4.in',
				onComplete: () => pageLoaderContent?.remove()
			})
			.to(
				pageLoaderContentAfter,
				{
					height: 0,
					duration: 1.25,
					ease: 'expo.in',
					onComplete: () => {
						pageLoaderContentAfter?.remove();
						document.body.style.overflow = 'auto';
					}
				},
				'-=1.1'
			)
			.fromTo(
				'nav',
				{
					opacity: 0
				},
				{
					opacity: 1,
					duration: 1.25,
					ease: 'expo.inOut'
				}
			)
			.fromTo(
				'.hero h1',
				{
					opacity: 0,
					y: '-80px'
				},
				{
					y: '0%',
					opacity: 1,
					duration: 1.5,
					ease: 'expo.out'
				},
				'-=0.75'
			)
			.fromTo(
				'.hero a',
				{
					opacity: 0,
					y: '100%'
				},
				{
					y: '0%',
					opacity: 1,
					duration: 1.5,
					ease: 'expo.out'
				}
			)
			.fromTo(
				'.about__section h2',
				{
					opacity: 0,
					y: '-100%'
				},
				{
					y: '0%',
					opacity: 1,
					duration: 1.5,
					ease: 'expo.out'
				},
				'-=1.25'
			)
			.fromTo(
				'.about__card',
				{
					opacity: 0,
					y: '100%'
				},
				{
					y: '0%',
					opacity: 1,
					duration: 1.5,
					ease: 'expo.out',
					stagger: 0.25
				},
				'-=1.25'
			);
	});
</script>

<svelte:head>
	<title>Home | Portfolio</title>
	<meta name="description" content="Portfolio of software engineer Bodhi Vandael" />
	<meta name="keywords" content="portfolio, software, engineer, bodhi, vandael" />
	<meta name="author" content="Bodhi Vandael" />
</svelte:head>

<div
	bind:this={pageLoaderContent}
	class="fixed inset-0 z-30 grid place-items-center overflow-hidden bg-slate-200 dark:bg-slate-900"
>
	<div class="overflow-hidden">
		<p bind:this={loaderText} class="py-2 text-lg lg:text-2xl">LOADING</p>
	</div>
</div>
<div
	bind:this={pageLoaderContentAfter}
	class="fixed inset-0 z-20 grid place-items-center overflow-hidden bg-slate-100 dark:bg-slate-800"
/>

<main class="relative">
	<svg
		class="absolute left-32 top-24 w-80"
		width="128"
		height="128"
		viewBox="0 0 128 128"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<rect width="128" height="128" fill="url(#pattern0)" />
		<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.25" height="0.25">
				<use xlink:href="#image0_15_1694" transform="scale(0.00195312)" />
			</pattern>
			<image
				id="image0_15_1694"
				width="128"
				height="128"
				xlink:href="data:image/png;base64,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"
			/>
		</defs>
	</svg>

	<svg
		class="absolute right-40 top-96 w-80"
		width="128"
		height="128"
		viewBox="0 0 128 128"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<rect width="128" height="128" fill="url(#pattern0)" />
		<defs>
			<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="0.25" height="0.25">
				<use xlink:href="#image0_15_1694" transform="scale(0.00195312)" />
			</pattern>
			<image
				id="image0_15_1694"
				width="128"
				height="128"
				xlink:href="data:image/png;base64,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"
			/>
		</defs>
	</svg>

	<svg
		class="absolute right-2/4 top-3/4 -z-10 w-80"
		width="244"
		height="244"
		viewBox="0 0 244 244"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
	>
		<rect width="244" height="244" fill="url(#pattern0)" />
		<defs>
			<pattern
				id="pattern0"
				patternContentUnits="objectBoundingBox"
				width="0.131148"
				height="0.131148"
			>
				<use xlink:href="#image0_18_243" transform="scale(0.00102459)" />
			</pattern>
			<image
				id="image0_18_243"
				width="128"
				height="128"
				xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB7dJBEQAwDMOwbPw5bwXRX6Q7M3ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7DjTC7VuqGaAcgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWPEBR/wBByEVuk8AAAAASUVORK5CYII="
			/>
		</defs>
	</svg>

	<section class="hero mx-auto mb-32 mt-20 max-w-2xl text-center">
		<h1 class="mb-12 text-4xl leading-relaxed">
			Welcome to my portfolio, where imagination meets functionality and dreams transform into
			digital reality.
		</h1>

		<a
			href="contact"
			class="rounded-full border border-primary-dark px-8 py-4 text-primary-dark transition-all hover:border-primary-dark hover:bg-primary-dark hover:text-primary-light dark:border-slate-800 dark:text-primary-light dark:hover:border-slate-600 dark:hover:bg-slate-800"
		>
			Get in touch
		</a>
	</section>

	<section class="about__section container mx-auto px-8 lg:px-0">
		<h2 class="mb-12 text-6xl font-bold">About me</h2>

		<div class="grid gap-8 lg:grid-cols-3">
			<AboutCard
				title="Passionate Problem-Solver"
				content="As a software engineer, I'm fueled by a relentless drive to solve complex problems. With
					unwavering dedication and a keen eye for detail, I thrive on finding innovative solutions
					that make a real impact."
			/>

			<AboutCard
				title="Tech Savvy"
				content="Mastery of diverse technologies is my forte. From front-end to back-end, I possess a
					versatile skill set encompassing various languages, frameworks, and methodologies,
					enabling me to adapt and excel in any software engineering environment."
			/>
			<AboutCard
				title="Collaborative Innovator"
				content="I excel in collaborative environments, where diverse perspectives merge to fuel
					innovation. With strong communication skills and a collaborative mindset, I contribute to
					dynamic teams, leveraging our collective brilliance to achieve remarkable results."
			/>
		</div>
	</section>

	<section class="container mx-auto mt-16 px-8 lg:px-0">
		<h2 class="mb-12 text-6xl font-bold">Skills</h2>

		<div class="grid gap-8 lg:grid-cols-3">
			<div class="mb-8">
				<h3 class="mb-4 text-2xl font-bold">Frontend Development</h3>

				<div class="flex flex-wrap items-center gap-4">
					<Chip>HTML5</Chip>
					<Chip>CSS3</Chip>
					<Chip>TypeScript</Chip>
					<Chip>React</Chip>
					<Chip>Angular</Chip>
					<Chip>Vue</Chip>
					<Chip>Svelte</Chip>
					<Chip>TailwindCSS</Chip>
					<Chip>UI/UX Principles</Chip>
					<Chip>Performance Optimization</Chip>
				</div>
			</div>

			<div>
				<div>
					<h3 class="mb-4 text-2xl font-bold">Backend Development</h3>
				</div>

				<div class="flex flex-wrap items-center gap-4">
					<Chip>Express.js (Node.js, Nest.js)</Chip>
					<Chip>Java (Spring Boot)</Chip>
					<Chip>PHP (Laravel)</Chip>
					<Chip>Netlify</Chip>
					<Chip>DigitalOcean</Chip>
					<Chip>Vercel</Chip>
					<Chip>RESTful API Development</Chip>
					<Chip>GraphQL</Chip>
					<Chip>MySQL</Chip>
					<Chip>PostgreSQL</Chip>
				</div>
			</div>

			<div>
				<div>
					<h3 class="mb-4 text-2xl font-bold">Additional Skills</h3>
				</div>

				<div class="flex flex-wrap items-center gap-4">
					<Chip>Monorepo (Nx, Turborepo)</Chip>
					<Chip>Docker</Chip>
					<Chip>Testing (JUnit, Pest, Jest)</Chip>
					<Chip>GitHub Actions</Chip>
					<Chip>Strong Problem-Solving Abilities</Chip>
					<Chip>Agile (Scrum, Kanban)</Chip>
					<Chip>Collaboration</Chip>
					<Chip>Continuous Learning</Chip>
				</div>
			</div>
		</div>
	</section>
</main>
