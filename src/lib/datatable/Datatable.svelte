<script lang="ts">
	type T = $$Generic

	import {PaginationControl} from '../index';
	import { createEventDispatcher, setContext } from 'svelte';
	import { Writable, writable } from 'svelte/store';

	export let items: T[];
	export let paginate: boolean = false;
	export let perPage: number = 25;

	let currentPage: number = 0;
	let currentSort: (a: T,b: T) => number = (a,b) => {return 0};
	let dispatcher = createEventDispatcher();
	let sortReversed: boolean = false;

	const selectedHeader: Writable<any> = writable({
		sort:undefined,
		sortReversed: false
	});

	if(!paginate){
		perPage = items.length;
	}

	items.sort(currentSort);
	items = items;

	setContext("datatable", {
		selectHeader: header => {
			if($selectedHeader != header || $selectedHeader.sortReversed != sortReversed){
				currentSort = header.sort;
				items.sort(currentSort);

				if(header.sortReversed){
					items.reverse();
				}
				items = items;
				sortReversed = header.sortReversed;
				dispatcher("sort", {});
			}

			$selectedHeader = header;
		},
		selectedHeader
	});
</script>

<table class="table table-bordered">
	<thead>
		<slot name="header"></slot>
	</thead>
	<tbody>
		{#each items.slice(currentPage*perPage, (currentPage+1)*perPage) as item}
			<slot name="body" prop={item}></slot>
		{/each}
	</tbody>
	<tfoot>
		<slot name="footer"></slot>
	</tfoot>
</table>
{#if paginate}
	<PaginationControl numberItems={items.length} bind:currentPage {perPage} on:pageChanged></PaginationControl>
{/if}