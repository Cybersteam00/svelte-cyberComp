<script lang="ts">
	type T = $$Generic

	import PaginationControl from "./PaginationControl.svelte";

	export let items: T[];
	export let perPage: number = 25;

	let currentPage: number = 0;
</script>

<div class="pagination-items">
	{#each items.slice(currentPage*perPage, (currentPage+1)*perPage) as item}
		<slot name="body" prop={item}></slot>
	{/each}
</div>
<PaginationControl numberItems={items.length} {perPage} bind:currentPage on:pageChanged></PaginationControl>