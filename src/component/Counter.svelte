<script lang="ts">
	let count: number = 0;
</script>

<button type="button" class="btn btn-dark" on:click={() => count++}>Increase</button>
<p>{count}</p>