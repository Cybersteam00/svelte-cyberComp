<script lang="ts" context="module">
	export const dataTableKey = {name:"datatable"};
</script>

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
	export let currentPage: number = 1;

	let dispatcher = createEventDispatcher();
	let sortReversed: boolean = false;

	$: items = sortItems(items, $selectedHeader)

	const selectedHeader = writable<ITableHeader<T>>({
		sort: undefined,
		additionalSorts: [],
		sortReversed: false,
		sortBy: ""
	});

	if(!paginate && items.length > 0){
		perPage = items.length;
	}

	setContext<TableContext<T>>(dataTableKey, {
		selectHeader: header => {
			if($selectedHeader != header || $selectedHeader.sortReversed != sortReversed){
				sortReversed = header.sortReversed;
				$selectedHeader = header;

				dispatcher("sort", header);
			}
		},
		selectedHeader
	});

	function sortItems(i: T[], header: ITableHeader<T>){
		if(header.sort != undefined){
			var order: number = 1;
			if(header.sortReversed) order = -1;

			i.sort((a,b) => {
				var result: number = header.sort(a,b) * order;

				if(result == 0){
					for(let s of header.additionalSorts){
						let result2 = s(a,b);
						if(result2 != 0){result = result2; break;}
					}
				}

				return result;
			})
		}

		return i;
	}
</script>

<table class={$$props.class || ''}>
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