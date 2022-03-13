<script lang="ts">
	import { createEventDispatcher, getContext } from 'svelte';
	import type { AccordionContext, IAccordionItem } from './accordion';
	import TransitionWrapper from '../TransitionWrapper.svelte';
	import { accordionKey } from './Accordion.svelte';

	export let active: boolean = false;
	export let disabled: boolean = false;
	export let lazy: boolean = false;
	export let loadOnce: boolean = false;

	let item: IAccordionItem = {
		active: active && !disabled,
		index: 0,
		open: openItem,
		close: closeItem
	};
	let el: HTMLDivElement
	let loaded: boolean = active && !disabled;
	let dispatcher = createEventDispatcher();

	const { registerItem, items, collapsing, alwaysOpen } = getContext<AccordionContext>(accordionKey);

	item = registerItem(item);

	function toggleItem(){
		if(!$collapsing){
			if(item.active){
				closeItem()
			}else{
				openItem()
			}
		}
	}

	function openItem(){
		if(!disabled){
			item.active = true;
		
			if(!lazy || (lazy && loaded)){
				var height: number = 0;
				$collapsing = true;
	
				if(!alwaysOpen){
					$items.map(i => {
						if(i != item && i.active){
							i.close()
						}
						return i
					});
				}
		
				el.style.display = "block"
				height = el.offsetHeight;
				el.style.display = ""
		
				el.classList.remove("collapse");
				el.classList.add("collapsing");
		
				var duration: number = parseFloat(getComputedStyle(el)["transition-duration"])
		
				el.style.height = height + "px";
		
				window.setTimeout(() => {
					el.classList.add("show");
					el.classList.add("collapse");
					el.classList.remove("collapsing");
					el.style.height = "";
					$collapsing = false;
				}, duration * 1000)
				dispatcher("open", {})
			}
			loaded = true;
		}

	}

	function closeItem(){
		item.active = false;

		if(!lazy || (lazy && loaded)){
			$collapsing = true;
			
			el.style.height = el.offsetHeight + "px";
			el.classList.add("collapsing");
			el.classList.remove("collapse");
			el.classList.remove("show");
			
			var duration: number = parseFloat(getComputedStyle(el)["transition-duration"])
			el.style.height = "";
	
			window.setTimeout(() => {
				el.classList.add("collapse");
				el.classList.remove("collapsing");
				$collapsing = false;
			}, duration * 1000)
			dispatcher("close", {})
		}

		if(lazy && !loadOnce){ loaded = false;}
	}
</script>

<div class={$$props.class || ''} class:disabled class:active={$items[item.index].active}>
	<div class="accordion-header" on:click={() => disabled ? "" : toggleItem()}>
		<slot name="header"></slot>
	</div>
	<div class="accordion-collapse collapse {active ? "show" : ""}" bind:this={el}>
		{#if lazy}
			{#if loadOnce && loaded}
			<TransitionWrapper on:mounted={() => {openItem()}}>
				<slot name="body"></slot>
			</TransitionWrapper>
			{:else if $items[item.index].active}
			<TransitionWrapper on:mounted={() => {openItem()}} on:destroy={() => {closeItem()}}>
				<slot name="body"></slot>
			</TransitionWrapper>
			{/if}
		{:else}
			<slot name="body"></slot>
		{/if}
	</div>
</div>