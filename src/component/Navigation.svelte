<script lang="ts">
	let show: boolean = false;
	let showDropdown: boolean = false;
</script>

<nav class="navbar navbar-expand-md navbar-light bg-light">
	<div class="container-fluid">
		<a class="navbar-brand" href="{import.meta.env.VITE_BASE_URL}/">Svelte-cyberComp</a>
		<div class="collapse navbar-collapse" class:show>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" href="{import.meta.env.VITE_BASE_URL}/guide">Guide</a>
				</li>
				<li class="nav-item dropdown">
					<p class="nav-link dropdown-toggle" on:click={() => {showDropdown = !showDropdown}} role="button">Docs</p>
					<ul class="dropdown-menu" class:show={showDropdown}>
						<li>
							<a class="dropdown-item" href="{import.meta.env.VITE_BASE_URL}/guide/accordion">Accordion</a>
						</li>
						<li>
							<a class="dropdown-item" href="{import.meta.env.VITE_BASE_URL}/guide/datatable">DataTable</a>
						</li>
						<li>
							<a class="dropdown-item" href="{import.meta.env.VITE_BASE_URL}/guide/pagination">Pagination</a>
						</li>
						<li>
							<a class="dropdown-item" href="{import.meta.env.VITE_BASE_URL}/guide/tabs">Tabs</a>
						</li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="{import.meta.env.VITE_BASE_URL}/changes">Release Notes</a>
				</li>
			</ul>
		</div>
		<div>
			<a class="link" target="_blank" href="https://github.com/Cybersteam00/svelte-cyberComp">
				Github
				<img src="{import.meta.env.VITE_BASE_URL}/image/github.svg" alt="github" height="16" />
			</a>
			<a class="link" href="https://github.com/Cybersteam00/svelte-cyberComp/issues" target="_blank">
				Report issue
			</a>
		</div>
		<button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" on:click={() => {show = !show}}>
			<span class="navbar-toggler-icon"></span>
		</button>
	</div>
</nav>