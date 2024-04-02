import { error, redirect } from '@sveltejs/kit';
import {getPost, RemovePost} from "$lib/server/store";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, cookies }) {
    const post = getPost(params.slug);

	if (!post) throw error(404);

	return {
		post,
		isyouownpost: post.user === cookies.get("userid")
	};
};

export const actions = {
	delete: async ({ params, cookies }) => {
		const userid = cookies.get('userid');
		
		if (userid) {
			RemovePost(params.slug)
			redirect(303, '/blog');
		}
	}
}