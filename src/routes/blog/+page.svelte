<script>
	import Post from '../post.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Blog posts</h1>
<a href="/create_blog"> Create new blog </a>
<a href="/blog/your_posts"> Your own posts </a>
<ol>
	{#each data.posts as post, i}
		<Post {...post} />
	{/each}
</ol>
