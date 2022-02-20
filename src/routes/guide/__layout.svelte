<script lang="ts">
	let expandedNav: number = 0;

	function toggleSubNav(id: number){
		if(expandedNav == 0){
			expandedNav = id;
		}else{
			expandedNav = 0;
		}
	}
</script>

<div class="grid-guide">
	<aside>
		<nav class="docs-nav">
			<ul class="list-unstyled">
				<li>
					<a class="link" href="{import.meta.env.VITE_BASE_URL}/guide">Getting Startet</a>
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
	<div class="p-4">
		<slot></slot>
	</div>
</div>