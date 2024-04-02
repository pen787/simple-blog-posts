import { createNewPost } from '$lib/server/store';
import { getCurrentDateFormatted } from '$lib/index';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	// @ts-ignore
	create: async ({ request, cookies }) => {
		const data = await request.formData();
		const userid = cookies.get('userid');
		let topic = data.get('topic');
		let author = data.get('author');
		let content = data.get('content');

		if (topic && author && content && userid) {
			createNewPost({
				// @ts-ignore
				topic: topic,
				// @ts-ignore
				author: author,
				// @ts-ignore
				content: content,
				// @ts-ignore
				date: getCurrentDateFormatted(),
				// @ts-ignore
				user: userid,
			});
			redirect(303, '/blog');
		} else {
			redirect(303, '/create_blog');
		}
	},
};
