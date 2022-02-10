<script lang="ts">
	let count: number = 0;
</script>

<button type="button" on:click={() => count++}>Increase</button>
<p>{count}</p>