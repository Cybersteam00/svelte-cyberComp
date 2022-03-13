<script lang="ts">
import { createEventDispatcher, onDestroy, onMount } from "svelte";

let dispatcher = createEventDispatcher();

	onMount(() => {
		dispatcher("mounted")
	})

	onDestroy(() => {
		dispatcher("destroy")
	})
</script>

<slot></slot>