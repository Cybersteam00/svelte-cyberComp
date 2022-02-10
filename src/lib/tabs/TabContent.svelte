<script lang="ts">
	import { getContext } from 'svelte';

	export let lazy: boolean = false;
	export let loadOnce: boolean = false;

	const panel = {
		loaded: false
	};
	const { registerPanel, selectedPanel } = getContext("tabs");

	registerPanel(panel);
</script>

{#if lazy}
	{#if loadOnce && panel.loaded}
		<div class="tab-pane" class:active={$selectedPanel === panel} role="tabpanel">
			<slot></slot>
		</div>
	{:else if panel.loaded &&  $selectedPanel === panel}
		<div class="tab-pane active" role="tabpanel">
			<slot></slot>
		</div>
	{/if}
{:else}
	<div class="tab-pane" class:active={$selectedPanel === panel} role="tabpanel">
		<slot></slot>
	</div>
{/if}
