<script>
	import Post from '../../post.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h2>
   โพสต์ของคุณ
</h2>

<a href="/create_blog">สร้างโพสต์ใหม่</a>
{#if data.you_posts.length == 0}
	<p>คุณไม่มีโพสต์ :(</p>
{/if}

<ol>
	{#each data.you_posts as post, i}
		<Post {...post}/>
	{/each}
</ol>