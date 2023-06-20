import type contentful from 'contentful';

export interface BlogPostSkeleton {
	contentTypeId: 'blogPost';
	fields: {
		title: contentful.EntryFields.Text;
		slug: contentful.EntryFields.Text;
		content: contentful.EntryFields.RichText;
		featuredImage: contentful.EntryFields.Object;
	};
}
