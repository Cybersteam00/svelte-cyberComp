import type { Writable } from "svelte/store";

export {default as Accordion} from "./Accordion.svelte";
export {default as AccordionItem} from "./AccordionItem.svelte";

export interface AccordionContext{
	registerItem: (a: IAccordionItem) => IAccordionItem,
	toggleItem: (a: IAccordionItem) => IAccordionItem,
	items: Writable<IAccordionItem[]>
}

export interface IAccordionItem{
	active: boolean,
	loaded: boolean,
	index: number,
	state: string,
	animate: boolean
}
export const accordionKey = Symbol("accordion");