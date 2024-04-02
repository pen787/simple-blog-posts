<script>
// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let id;
	export let topic;
	export let author;
	export let date;
	export let user;
</script>

<li style="padding-bottom: 1em;">
	<div>
		<a href="/blog/{id}">{topic}</a>
		<br>
		<code>
			{date}
			<br>
			by : {author}
			<br>
			created user id : {user}
		</code>
	</div>
</li>