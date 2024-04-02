<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

{#if data.isyouownpost}
<form method="post" action="?/delete">
	<label>
		Delete post :
		<input type="submit" value="Submit">
	</label>
</form>
{/if}


<h1>
	{data.post.topic}
</h1>
<h4>
	{data.post.date}
	<br>
	by {data.post.author}
</h4>

<p>{data.post.content}</p>
