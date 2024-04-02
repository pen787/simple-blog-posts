/** @type {import('./$types').LayoutServerLoad} */
import {getAllPost} from "$lib/server/store";

export async function load() {
    return {
        posts: getAllPost()
    };
}