<script lang="ts">
	type T = $$Generic

	import {PaginationControl, TableContext} from '../index';
	import { createEventDispatcher, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { ITableHeader } from './datatable';

	export let items: T[];
	export let paginate: boolean = false;
	export let perPage: number = 25;
	export let lookupPages: number = null;

	let currentPage: number = 1;
	
	let dispatcher = createEventDispatcher();
	let sortReversed: boolean = false;

	const selectedHeader = writable<ITableHeader<T>>({
		sort: undefined,
		sortReversed: false,
		sortBy: ""
	});

	if(!paginate && items.length > 0){
		perPage = items.length;
	}

	setContext<TableContext<T>>("dataTableKey", {
		selectHeader: header => {
			if($selectedHeader != header || $selectedHeader.sortReversed != sortReversed){
				if(header.sort != undefined){
					items.sort(header.sort);

					if(header.sortReversed){
						items.reverse();
					}
					items = items;
				}

				sortReversed = header.sortReversed;

				dispatcher("sort", {
					sort: header.sort,
					sortReversed: header.sortReversed,
					sortBy: header.sortBy
				});
			}

			$selectedHeader = header;
		},
		selectedHeader
	});
</script>

<table class={$$props.class}>
	<thead>
		<slot name="header"></slot>
	</thead>
	<tbody>
		{#each items.slice((currentPage-1)*perPage, currentPage*perPage) as item}
			<slot name="body" prop={item}></slot>
		{/each}
	</tbody>
	<tfoot>
		<slot name="footer"></slot>
	</tfoot>
</table>
{#if paginate}
	<PaginationControl numberItems={items.length} bind:currentPage {perPage} {lookupPages} on:pageChanged>
		<slot name="pageControl" slot="pageControl"></slot>
	</PaginationControl>
{/if}