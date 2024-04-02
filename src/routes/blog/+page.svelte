<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>
	Blog posts
</h1>
<a href="/create_blog">
	create new blog!
</a>
<ol>
	{#each data.posts as post, i}
		<li style="padding-bottom: 1em;">
			<div>
				<a href="/blog/{post.id}">{post.topic}</a>
				<br>
				<code>
					{post.date}
					<br>
					by : {post.author}
				</code>
			</div>
		</li>
	{/each}
</ol>
