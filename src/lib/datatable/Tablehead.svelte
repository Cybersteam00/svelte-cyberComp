<script lang="ts">
	type T = $$Generic

	import { getContext } from 'svelte';

	export let sort: (a: any,b: any) => number;
	export let sortReversed: boolean = false;
	export let active: boolean = false;

	const header = {
		sort: sort,
		sortReversed: sortReversed
	}

	const { selectHeader, selectedHeader } = getContext("datatable");

	function setCurrentHeader(reversed: boolean){
		header.sortReversed = reversed;

		selectHeader(header);
	}

	if(active){
		selectHeader(header);
	}
</script>

<th>
	<div class="d-flex">
		<div class="flex-grow-1"><slot></slot></div>
		<i class="fas fa-arrow-up me-2 {$selectedHeader == header && !header.sortReversed ? "active" : ""}" role="button" on:click={() => {setCurrentHeader(false)}}></i>
		<i class="fas fa-arrow-down {$selectedHeader == header && header.sortReversed ? "active" : ""}" role="button" on:click={() => {setCurrentHeader(true)}}></i>
	</div>
</th>