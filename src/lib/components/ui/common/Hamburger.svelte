<script lang="ts">
	let active = false;

	const handleHamburgerClick = () => {
		active = !active;

		if (active) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	};
</script>

<button
	on:click={handleHamburgerClick}
	aria-label="hamburger menu"
	class:active
	class="hamburger block lg:hidden"
>
	<div />
	<div />
	<div />
</button>

<style lang="scss">
	.hamburger {
		width: 30px;
		height: 30px;
		transition: 0.3s ease transform;
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
