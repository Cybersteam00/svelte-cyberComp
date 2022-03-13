<script lang="ts">
	type T = $$Generic;

	import PaginationControl from "./PaginationControl.svelte";

	export let items: T[];
	export let perPage: number = 25;
	export let currentPage: number = 1;
	export let lookupPages: number = null;
	export let noControl: boolean = false;
</script>

<div class="pagination-items {$$props.class || ''}">
	{#each items.slice((currentPage - 1) * perPage, currentPage * perPage) as item}
		<slot name="body" prop={item} />
	{/each}
</div>
{#if !noControl}
	<PaginationControl numberItems={items.length} {perPage} {lookupPages} bind:currentPage on:pageChanged>
		<slot name="pageControl" slot="pageControl" />
	</PaginationControl>
{/if}
