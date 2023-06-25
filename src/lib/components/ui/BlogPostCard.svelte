<script lang="ts">
	export let post: any;
</script>

<div
	class="blog__post flex max-h-60 flex-col overflow-hidden rounded-lg border border-slate-700 bg-amber-200 shadow-md dark:bg-slate-800"
>
	<img
		class="h-2/3 object-cover"
		src={post.featuredImage.fields.file.url}
		alt={post.featuredImage.fields.title}
	/>

	<div class="p-4">
		<a class=" text-primary-dark dark:text-primary-light" href={post.slug}>{post.title}</a>
	</div>
</div>
