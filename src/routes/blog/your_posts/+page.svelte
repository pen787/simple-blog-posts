<script>
	import Post from '../../post.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h2>
    Your posts
</h2>

<ol>
	{#each data.you_posts as post, i}
		<Post {...post}/>
	{/each}
</ol>