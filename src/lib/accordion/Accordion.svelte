<script lang="ts">

	import { createEventDispatcher, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { AccordionContext, IAccordionItem } from './accordion';

	export let alwaysOpen: boolean = false;
	export let animate: boolean = false;

	let items = writable<IAccordionItem[]>([]);
	let dispatcher = createEventDispatcher();

	setContext<AccordionContext>("accordionKey", {
		registerItem: item => {
			item.index = $items.length;
			item.animate = animate;
			$items = [...$items, item];

			return item;
		},

		toggleItem: item => {
			if(!alwaysOpen){
				$items.map(i => {
					if(i != item){
						i.active = false;
					}
					return i
				});
			}
			item.active = !item.active;
			item.loaded = true;
			$items[item.index].active = item.active;

			dispatcher("toggle")
			return item;
		},
		items: items
	});
</script>

<div class={$$props.class}>
	<slot></slot>
</div>