<script lang="ts">
	import { getContext } from 'svelte';
	import type { ITab, TabsContext } from './tabs';
	import { tabsKey } from './Tabs.svelte';

	export let active: boolean = false;
	export let disabled: boolean = false;

	const tab: ITab = {
		active: active,
		disabled: disabled
	};
	const { registerTab, selectTab, selectedTab } = getContext<TabsContext>(tabsKey);

	registerTab(tab);
</script>

<li class={$$props.class || ''} on:click={() => disabled ? "" : selectTab(tab)}>
	<div class="nav-link" class:disabled class:active="{$selectedTab === tab}" role="button">
		<slot></slot>
	</div>
</li>