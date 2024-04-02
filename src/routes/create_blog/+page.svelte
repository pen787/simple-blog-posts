<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<form method="post" action="?/create">
	<label>
		topic :
		<input name="topic" autocomplete="off" required/>
	</label>
	<label>
		author :
		<input name="author" autocomplete="on" required/>
	</label>
	<br />
	<textarea name="content" rows="16" cols="64" required/>
    <br>
    <input type="submit" name="Submit">
</form>
