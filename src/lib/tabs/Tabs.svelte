<script lang="ts">
	import { createEventDispatcher, setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { IPanel, ITab, TabsContext } from './tabs';

	let tabs: ITab[] = [];
	let panels: IPanel[] = [];
	let dispatcher = createEventDispatcher();

	const selectedTab = writable<ITab>(null);
	const selectedPanel = writable<IPanel>(null);

	setContext<TabsContext>("tabKey", {
		registerTab: tab => {
			tabs = [...tabs, tab];
			if(tab.active){
				$selectedTab = tab;
			}
		},

		registerPanel: panel => {
			panels = [...panels, panel];
			if(tabs.indexOf($selectedTab) >= 0){
				$selectedPanel = panels[tabs.indexOf($selectedTab)];
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
</script>

<div class={$$props.class}>
	<slot></slot>
</div>