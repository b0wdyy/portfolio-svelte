<script lang="ts">
	import '../app.scss';
	import Nav from '$lib/components/ui/common/Nav.svelte';
	import Footer from '$lib/components/ui/common/Footer.svelte';
	import ogImage from '$lib/assets/thumbnail.jpeg';
</script>

<svelte:head>
	<meta property="og:image" content={ogImage} />
	<meta property="twitter:image" content={ogImage} />
</svelte:head>
<Nav />
<slot />
<Footer />
