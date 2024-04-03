<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if data.isyouownpost}
<form method="post" action="?/delete">
	<label>
		ลบโพสต์ :
		<input type="submit" value="Submit">
	</label>
</form>
{/if}


<h1>
	{data.post.topic}
</h1>
<code>
	{data.post.date}
	<br>
	by {data.post.author}
</code>

<p>{@html data.post.content}</p>
