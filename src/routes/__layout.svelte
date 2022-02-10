<script lang="ts">
	import Navigation from "$component/Navigation.svelte";
</script>

<Navigation />
<main>
	<slot />
</main>
<footer class="bg-light">
	<a href="https://github.com/Cybersteam00/svelte-cyberComp">
		<img src="{import.meta.env.VITE_BASE_URL}/image/github.svg" alt="github" height="32" />
	</a>
</footer>