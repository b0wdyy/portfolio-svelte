<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/ui/common/Nav.svelte';
	import Footer from '$lib/components/ui/common/Footer.svelte';
</script>

<Nav />
<slot />
<Footer />
