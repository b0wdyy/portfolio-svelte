// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as contentful from 'contentful';

export interface BlogPostSkeleton {
	contentTypeId: 'blogPost';
	fields: {
		title: contentful.EntryFields.Text;
		slug: contentful.EntryFields.Text;
		content: contentful.EntryFields.RichText;
	};
}
