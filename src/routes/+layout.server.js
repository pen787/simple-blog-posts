/** @type {import('./$types').LayoutServerLoad} */
export async function load({ cookies }) {
    const user = cookies.get("userid")

    if (!user) {
        cookies.set('userid', crypto.randomUUID(), { path: '/' });
    }

    return {};
}