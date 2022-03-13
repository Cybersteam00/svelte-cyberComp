import type { Writable } from "svelte/store";

export {default as DataTable} from "./DataTable.svelte";
export {default as TableHead} from "./TableHead.svelte";

export interface TableContext<T>{
	selectHeader: (header: ITableHeader<T>) => void,
	selectedHeader: Writable<ITableHeader<T>>
}

export interface ITableHeader<T>{
	sort: (a: T,b: T) => number,
	additionalSorts: ((a: T,b: T) => number)[],
	sortReversed: boolean,
	sortBy: string
}