<script lang="ts">
	import { getContext } from 'svelte';

	export let active: boolean = false;
	export let disabled: boolean = false;

	const tab = {
		active: active && !disabled
	};
	const { registerTab, selectTab, selectedTab } = getContext("tabs");

	registerTab(tab);
</script>

<li class="nav-item" on:click={() => disabled ? "" : selectTab(tab)}>
	<div class="nav-link" class:disabled class:active="{$selectedTab === tab}" role="button">
		<slot></slot>
	</div>
</li>