<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>
	{data.post.topic}
</h1>
<h4>
	{data.post.date}
	<br>
	by {data.post.author}
</h4>

<p>{data.post.content}</p>
