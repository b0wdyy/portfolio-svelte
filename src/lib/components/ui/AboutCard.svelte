<script lang="ts">
	export let title: string;
	export let content: string;
</script>

<div
	class="rounded-md border border-amber-200 bg-amber-100 bg-opacity-30 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900 dark:bg-opacity-30"
>
	<h3 class="mb-4 text-2xl font-bold">{title}</h3>

	<p>
		{content}
	</p>
</div>
