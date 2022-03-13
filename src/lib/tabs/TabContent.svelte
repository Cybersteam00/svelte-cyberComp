<script lang="ts">
	import { getContext } from 'svelte';
	import type { IPanel, TabsContext } from './tabs';
	import { tabsKey } from './Tabs.svelte';

	export let lazy: boolean = false;
	export let loadOnce: boolean = false;

	const panel: IPanel = {
		loaded: false
	};
	const { registerPanel, selectedPanel } = getContext<TabsContext>(tabsKey);

	registerPanel(panel);
</script>

{#if lazy}
	{#if loadOnce && panel.loaded}
		<div class="{$$props.class || ''}" class:active={$selectedPanel === panel} role="tabpanel">
			<slot></slot>
		</div>
	{:else if panel.loaded &&  $selectedPanel === panel}
		<div class="active {$$props.class || ''}" role="tabpanel">
			<slot></slot>
		</div>
	{/if}
{:else}
	<div class="{$$props.class || ''}" class:active={$selectedPanel === panel} role="tabpanel">
		<slot></slot>
	</div>
{/if}
