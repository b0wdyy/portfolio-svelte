import contentfulClient from '$lib/server/contentful';
import type { BlogPostSkeleton } from '$lib/types/contentful.interface';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const { items } = await contentfulClient.getEntries<BlogPostSkeleton>({
		content_type: 'blogPost'
	});

	return {
		posts: items.map((item) => ({
			title: item.fields.title,
			slug: item.fields.slug,
			content: item.fields.content
		}))
	};
}) satisfies PageServerLoad;
