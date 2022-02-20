import type { Writable } from "svelte/store";

export {default as Tab} from "./Tab.svelte";
export {default as Tabs} from "./Tabs.svelte";
export {default as TabContent} from "./TabContent.svelte";

export interface TabsContext{
	registerTab: (a: ITab) => void,
	registerPanel: (a: IPanel) => void,
	selectTab: (a: ITab) => void,
	selectedTab: Writable<ITab>,
	selectedPanel: Writable<IPanel>
}
export interface ITab{
	active: boolean
}

export interface IPanel{
	loaded: boolean
}