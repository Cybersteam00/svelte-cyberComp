<script lang="ts">
	import { getContext } from 'svelte';
	import type { ITableHeader, TableContext } from './datatable';
	import { dataTableKey } from './DataTable.svelte';

	export let sort: (a: any,b: any) => number;
	export let additionalSorts: ((a: any, b: any) => number)[] = []
	export let active: boolean = false;
	export let sortReversed: boolean = false;
	export let sortBy: string = "";

	const header: ITableHeader<any> = {
		sort: sort,
		additionalSorts: additionalSorts,
		sortReversed: sortReversed,
		sortBy: sortBy
	}

	const { selectHeader, selectedHeader } = getContext<TableContext<any>>(dataTableKey);

	function setCurrentHeader(reversed: boolean){
		header.sortReversed = reversed;

		selectHeader(header);
	}

	if(active){
		selectHeader(header);
	}
</script>

<th class={$$props.class || ''}>
	<div class="d-flex">
		<div class="flex-grow-1"><slot></slot></div>
		<div class="sort-icons">
			<i class="fas fa-arrow-up {$selectedHeader == header && !header.sortReversed ? "active" : ""}" role="button" on:click={() => {setCurrentHeader(false)}}></i>
			<i class="fas fa-arrow-down {$selectedHeader == header && header.sortReversed ? "active" : ""}" role="button" on:click={() => {setCurrentHeader(true)}}></i>
		</div>
	</div>
	<slot name="filter"></slot>
</th>