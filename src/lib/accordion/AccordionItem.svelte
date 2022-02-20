<script lang="ts">
	import { getContext } from 'svelte';
	import type { AccordionContext, IAccordionItem } from './accordion';

	export let active: boolean = false;
	export let disabled: boolean = false;
	export let lazy: boolean = false;
	export let loadOnce: boolean = false;

	let item: IAccordionItem = {
		active: active && !disabled,
		loaded: false,
		index: 0,
		state: active?"show":"",
		animate: false
	};

	const { registerItem, toggleItem, items } = getContext<AccordionContext>("accordionKey");

	item = registerItem(item);
</script>

<div class={$$props.class} class:disabled class:active={$items[item.index].active}>
	<div class="accordion-header" on:click={() => disabled ? "" : item = toggleItem(item)}>
		<slot name="header"></slot>
	</div>
	<div class="accordion-collapse collapse" class:show={(item.animate && !loadOnce) || $items[item.index].active}>
		{#if lazy}
			{#if loadOnce && item.loaded}
				<slot name="body"></slot>
			{:else if $items[item.index].active}
				<slot name="body"></slot>
			{/if}
		{:else if item.animate && $items[item.index].active}
			<slot name="body"></slot>
		{:else if !item.animate}
			<slot name="body"></slot>
		{/if}
	</div>
</div>