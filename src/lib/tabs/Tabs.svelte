<script lang="ts">
	interface tabs{
		registerTab: (a: any) => void,
		registerPanel: (a: any) => void,
		selectTab: (a: any) => void,
		selectedTab: Writable<any>,
		selectedPanel: Writable<any>
	}

	import { createEventDispatcher, setContext } from 'svelte';
	import { Writable, writable } from 'svelte/store';

	let tabs: any[] = [];
	let panels: any[] = [];
	let dispatcher = createEventDispatcher();

	const selectedTab = writable(null);
	const selectedPanel = writable(null);

	setContext<tabs>("tabs", {
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

<div>
	<slot></slot>
</div>