import type { Writable } from "svelte/store";

export {default as Accordion} from "./Accordion.svelte";
export {default as AccordionItem} from "./AccordionItem.svelte";

export interface AccordionContext{
	registerItem: (a: IAccordionItem) => IAccordionItem,
	items: Writable<IAccordionItem[]>,
	collapsing: Writable<boolean>,
	alwaysOpen: boolean
}

export interface IAccordionItem{
	active: boolean,
	index: number,
	open: () => void,
	close: () => void
}