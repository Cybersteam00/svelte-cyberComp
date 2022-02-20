<script lang="ts">
	interface Btn{
		pageID: number,
		type: number
	}

	import { createEventDispatcher, onMount, afterUpdate } from "svelte";

	export let numberItems: number;
	export let perPage: number = 10;
	export let currentPage: number = 1;
	export let lookupPages: number = null;

	const dispatcher = createEventDispatcher();

	$: buttons = generateButtons(numberItems, perPage);

	afterUpdate(() => {
		if(currentPage > buttons.length){
			currentPage = buttons.length;
		}else if(currentPage < 1){
			currentPage = 1;
		}
	})

	function generateButtons(items: number, perPage: number){
		var result: Btn[] = [];

		for(var i = 0; i < Math.ceil(items / perPage); i++){
			result.push({pageID: i + 1, type: 2});
		}

		if(currentPage > result.length){
			currentPage = result.length;
		}else if(currentPage < 1){
			currentPage = 1;
		}

		return result;
	}

	function changePage(pageID: number){
		currentPage = pageID;

		dispatcher("pageChanged");
	}

	function filterBtn(btns: Btn[]){
		if(lookupPages != null){
			return buttons.map(btn => {
				if(btn.pageID < lookupPages + 2 || btn.pageID > btns.length - lookupPages || (btn.pageID >= currentPage - lookupPages && btn.pageID <= currentPage + lookupPages)){
					btn.type = 2
				}else if(currentPage <= lookupPages && btn.pageID == lookupPages + 2){
					btn.type = 1;
				}else if(currentPage > 1 && (btn.pageID == currentPage - lookupPages-1 || btn.pageID == currentPage + lookupPages+1)){
					btn.type = 1;
				}else{
					btn.type = 0;
				}

				return btn;
			})
		}else{
			return btns;
		}
	}
</script>

<div class="pagination-control">
	<slot name="pageControl"></slot>
	<ul class="pagination">
		<li class="page-item {currentPage <= 1?"disabled":""}">
			<button class="page-link" aria-label="first" disabled={currentPage <= 1} on:click={() => {changePage(1)}}>
				<i class="fas fa-angle-double-left"></i>
			</button>
		</li>
		<li class="page-item {currentPage <= 1?"disabled":""}">
			<button class="page-link" aria-label="previous" disabled={currentPage <= 1} on:click={() => {changePage(currentPage - 1)}}>
				<i class="fas fa-chevron-left"></i>
			</button>
		</li>
		{#each filterBtn(buttons) as btn}
			{#if btn.type == 2}
				<li class="page-item {currentPage == btn.pageID ? "active" : ""}">
					<div role="button" class="page-link" on:click={() => {changePage(btn.pageID)}}>{btn.pageID}</div>
				</li>
			{:else if btn.type == 1}
				<li class="page-item">
					<div class="page-link pageSelect">...</div>
				</li>
			{/if}
		{/each}
		<li class="page-item {currentPage >= buttons.length?"disabled":""}">
			<button class="page-link" aria-label="next" disabled={currentPage >= buttons.length} on:click={() => {changePage(currentPage + 1)}}>
				<i class="fas fa-chevron-right"></i>
			</button>
		</li>
		<li class="page-item {currentPage >= buttons.length?"disabled":""}">
			<button class="page-link" aria-label="last" disabled={currentPage >= buttons.length} on:click={() => {changePage(buttons.length)}}>
				<i class="fas fa-angle-double-right"></i>
			</button>
		</li>
	</ul>
</div>