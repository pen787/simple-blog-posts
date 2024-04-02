/** @type {import('./$types').PageServerLoad} */
import { getAllPost } from '$lib/server/store';

export async function load({ cookies }) {
	let allposts = getAllPost();
	let userid = cookies.get('userid');
    /**
     * @type {any[]}
     */
    let you_posts = []
    allposts.forEach((v) => {
        if (v.user === userid) {
            you_posts.push(v)
        }
    })

	return {
		you_posts: you_posts
	};
}
