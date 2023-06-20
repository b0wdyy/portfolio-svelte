<script lang="ts">
	import type { PageServerData } from './$types';

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

<h1 class="text-5xl font-bold">My generous blog</h1>

{#each data.posts as post}
	<img src={post.featuredImage.fields.file.url} alt={post.featuredImage.fields.title} />
	<a href={post.slug}>{post.title}</a>
{/each}
