<script lang="ts" context="module">
	export const tabsKey = {name:"tabsKey"}
</script>

<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { IPanel, ITab, TabsContext } from './tabs';

	let tabs: ITab[] = [];
	let panels: IPanel[] = [];
	let dispatcher = createEventDispatcher();

	const selectedTab = writable<ITab>(null);
	const selectedPanel = writable<IPanel>(null);

	setContext<TabsContext>(tabsKey, {
		registerTab: tab => {
			tabs = [...tabs, tab];
			if(tab.active && !tab.disabled){
				$selectedTab = tab;
			}
		},

		registerPanel: panel => {
			panels = [...panels, panel];
			if(tabs[panels.length-1].active && !tabs[panels.length-1].disabled){
				$selectedPanel = panel;
				panel.loaded = true;
			}
		},

		selectTab: tab => {
			const i = tabs.indexOf(tab);
			$selectedTab = tab;
			$selectedPanel = panels[i];
			$selectedPanel.loaded = true;

			dispatcher("tabChanged")
		},
		selectedTab,
		selectedPanel
	});

	export function open(index: number){
		if(!tabs[index-1].disabled){
			$selectedTab = tabs[index-1];
			$selectedPanel = panels[index-1];
			$selectedPanel.loaded = true;
		}
	}
</script>

<div class={$$props.class || ''}>
	<slot></slot>
</div>