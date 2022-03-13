<script lang="ts" context="module">
	export const accordionKey = {name:"accordionKey"}
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { AccordionContext, IAccordionItem } from './accordion';

	export let alwaysOpen: boolean = false;

	let items = writable<IAccordionItem[]>([]);
	let collapsing = writable<boolean>(false);

	setContext<AccordionContext>(accordionKey, {
		registerItem: item => {
			item.index = $items.length;
			$items = [...$items, item];

			return item;
		},
		items: items,
		collapsing,
		alwaysOpen
	});

	export function open(index: number){
		$items[index-1].open();
	}

	export function close(index: number){
		$items[index-1].close();
	}
</script>

<div class={$$props.class || ''}>
	<slot></slot>
</div>