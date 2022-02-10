<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let numberItems: number;
	export let perPage: number = 10;
	export let currentPage: number = 0;

	const dispatcher = createEventDispatcher();

	$: buttons = generateButtons(numberItems, perPage);

	function generateButtons(items: number, perPage: number){
		var result = [];

		for(var i = 0; i < Math.ceil(items / perPage); i++){
			result.push(i);
		}

		if(currentPage > result.length - 1){
			currentPage = result.length - 1;
		}

		return result;
	}

	function changePage(pageID: number){
		currentPage = pageID;

		dispatcher("pageChanged");
	}
</script>

<ul class="pagination">
	<li>
		<button class="btn btn-outline-primary" aria-label="first" disabled={currentPage <= 0} on:click={() => {changePage(0)}}>&laquo;</button>
	</li>
	<li>
		<button class="btn btn-outline-primary" aria-label="previous" disabled={currentPage <= 0} on:click={() => {changePage(currentPage - 1)}}>&lt;</button>
	</li>
	{#each buttons as i}
	<li>
		<button type="button" class="btn {currentPage == i ? "btn-primary" : "btn-outline-primary"}" on:click={() => {changePage(i)}}>{i+1}</button>
	</li>
	{/each}
	<li>
		<button class="btn btn-outline-primary" aria-label="next" disabled={currentPage >= buttons.length-1} on:click={() => {changePage(currentPage + 1)}}>&gt;</button>
	</li>
	<li>
		<button class="btn btn-outline-primary" aria-label="last" disabled={currentPage >= buttons.length-1} on:click={() => {changePage(buttons.length-1)}}>&raquo;</button>
	</li>
</ul>