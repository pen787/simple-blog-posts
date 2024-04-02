import { error } from '@sveltejs/kit';
import {getPost} from "$lib/server/store";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const post = getPost(params.slug);

	if (!post) throw error(404);

	return {
		post
	};
};