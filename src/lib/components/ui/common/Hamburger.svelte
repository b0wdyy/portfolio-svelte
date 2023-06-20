<script lang="ts">
	import { gsap } from 'gsap';

	let active = false;
	let navWrapper: HTMLDivElement;
	let tl = gsap.timeline();

	const reverseTimeline = () => {
		tl.reverse();
		active = false;
		document.body.style.overflow = 'auto';
	};

	const handleHamburgerClick = () => {
		active = !active;
		tl.reversed(!active);

		if (active) {
			tl.to(navWrapper, {
				borderBottomLeftRadius: '0',
				borderBottomRightRadius: '0',
				height: '100vh',
				duration: 0.5,
				ease: 'power2.inOut'
			}).to('.nav-items > a', {
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'power3.inOut',
				stagger: {
					amount: 0.2
				}
			});
			document.body.style.overflow = 'hidden';
		} else {
			tl.reverse();
			document.body.style.overflow = 'auto';
		}
	};
</script>

<button
	on:click={handleHamburgerClick}
	aria-label="hamburger  menu"
	class:active
	class="hamburger z-20 block lg:hidden"
>
	<div />
	<div />
	<div />
</button>

<div
	bind:this={navWrapper}
	class="fixed inset-0 z-10 flex h-0 items-center justify-center overflow-hidden rounded-b-[35%] bg-amber-100 dark:bg-slate-800"
>
	<div class="nav-items flex flex-col gap-20">
		<a
			on:click={reverseTimeline}
			class="relative -translate-x-8 -translate-y-full text-6xl font-bold text-primary-dark opacity-0 dark:text-primary-light"
			href="/"
		>
			<span class="absolute -translate-x-24 text-8xl opacity-20">00.</span>
			Home
		</a>

		<a
			on:click={reverseTimeline}
			class="relative -translate-y-full text-6xl font-bold text-primary-dark opacity-0 dark:text-primary-light"
			href="/blog"
		>
			<span class="absolute -translate-x-24 text-8xl opacity-20">01.</span>
			Blog
		</a>

		<a
			on:click={reverseTimeline}
			class="relative -translate-y-full translate-x-8 text-6xl font-bold text-primary-dark opacity-0 dark:text-primary-light"
			href="/contact"
		>
			<span class="absolute -translate-x-24 text-8xl opacity-20">02.</span>
			Contact
		</a>
	</div>
</div>

<style lang="scss">
	.hamburger {
		width: 30px;
		height: 30px;
		transition: 0.3s ease transform;
		position: relative;
	}

	.hamburger div {
		@apply bg-primary-dark dark:bg-primary-light;
		width: 6px;
		height: 2px;
		margin-left: 0;
		margin-bottom: 6px;
		border-radius: 4px;
		transition: 0.3s ease width, 0.3s ease margin-left, 0.3s ease margin-bottom,
			0.3s ease background-color;
	}

	.hamburger div:first-child {
		width: 22px;
	}

	.hamburger div:nth-child(2) {
		width: 15px;
	}

	.hamburger div:last-child {
		width: 30px;
		margin-bottom: 0;
	}

	.hamburger.active {
		transform: rotateZ(-90deg);
	}

	.hamburger.active div {
		width: 3px;
		margin-left: 12px;
		margin-bottom: 3px;
	}
</style>
