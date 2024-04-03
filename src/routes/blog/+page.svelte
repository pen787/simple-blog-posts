<script>
	import Post from '../post.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Blog posts</h1>
<a href="/create_blog"> สร้างโพสต์ใหม่ </a>
<a href="/blog/your_posts"> ดูโพสต์ของคุณเอง </a>
<ol>
	{#each data.posts as post, i}
		<Post {...post} />
	{/each}
</ol>
