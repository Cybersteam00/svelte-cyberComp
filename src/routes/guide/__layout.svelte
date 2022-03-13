<script lang="ts">
	let expandedNav: number = 0;
	let navExpanded: boolean = false;

	function toggleSubNav(id: number){
		if(expandedNav == 0){
			expandedNav = id;
		}else{
			expandedNav = 0;
		}
	}
</script>

<div class="container-fluid">
	<div class="row">
		<aside class="col-md-auto docs-aside" class:navExpanded>
			<button class="btn btn-dark position-absolute d-block d-md-none start-100" class:navExpanded on:click={() => {navExpanded = !navExpanded}}>
				{#if navExpanded}
					<i class="fas fa-angle-double-left"></i>
				{:else}
					<i class="fas fa-angle-double-right"></i>
				{/if}
			</button>
			<nav class="docs-nav" class:navExpanded>
				<ul class="list-unstyled">
					<li>
						<a class="link" href="{import.meta.env.VITE_BASE_URL}/guide">Getting Startet</a>
					</li>
					<li>
						<a class="link" href="{import.meta.env.VITE_BASE_URL}/guide/testdata">About Testdata</a>
					</li>
					<li>
						<button type="button" class="btn side-btn" aria-expanded="{expandedNav==1}" on:click={() => {toggleSubNav(1)}}><i class="fas fa-chevron-down"></i>Components</button>
						<div class="collapse {expandedNav==1?'show':''}">
							<ul class="list-unstyled">
								<li>
									<a class="link" href="{import.meta.env.VITE_BASE_URL}/guide/accordion">Accordion</a>
								</li>
								<li>
									<a class="link" href="{import.meta.env.VITE_BASE_URL}/guide/datatable">Datatable</a>
								</li>
								<li>
									<a class="link" href="{import.meta.env.VITE_BASE_URL}/guide/pagination">Pagination</a>
								</li>
								<li>
									<a class="link" href="{import.meta.env.VITE_BASE_URL}/guide/tabs">Tabs</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</nav>
		</aside>
		<div class="col p-4">
			<slot></slot>
		</div>
	</div>
</div>