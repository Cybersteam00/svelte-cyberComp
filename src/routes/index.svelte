<svelte:head>
	<title>Svelte Cyber Comp</title>
</svelte:head>

<div class="text-center my-4">
	<h1 class="d-none">Svelte Cyber Components</h1>
	<h2 class="d-none">Fast, Lightweight and highly cusimizable</h2>
	<p class="h2">Enhance your Website with lightweight and fast Components</p>
</div>
<div class="container-fluid">
	<div class="row">
		<div class="col-12 col-md-6 p-2">
			<div class="bg-light quickstart">
				<p>No additional Packages needed</p>
				<p>Build with Fontawsome 5.15.3 and Bootstrap 5.1.3</p>
				<p class="alert alert-info mt-4">To include other Version or css-frameworks, an additional .css is required. To style the components to your hearts content.</p>
			</div>
		</div>
		<div class="col-12 col-md-6 p-2">
			<div class="bordered quickstart">
				<div class="">
					<a href="{import.meta.env.VITE_BASE_URL}/guide" class="btn btn-primary">Get Startet</a>
					<a href="{import.meta.env.VITE_BASE_URL}/changes" class="btn btn-outline-primary">Changes</a>
				</div>
				<br />
				<p>npm install:</p>
				<div class="highlight mt-4">
					<pre><code>npm i svelte-cybercomp</code></pre>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-6 p-2">
			<div class="bordered quickstart">
				<h3 class="text-center">Available Components</h3>
				<div class="grid-components">
					<div class="card">
						<a href="{import.meta.env.VITE_BASE_URL}/guide/accordion" class="card-body">Accordion</a>
					</div>
					<div class="card">
						<a href="{import.meta.env.VITE_BASE_URL}/guide/datatable" class="card-body">Datatable</a>
					</div>
					<div class="card">
						<a href="{import.meta.env.VITE_BASE_URL}/guide/pagination" class="card-body">Pagination</a>
					</div>
					<div class="card">
						<a href="{import.meta.env.VITE_BASE_URL}/guide/tabs" class="card-body">Tabs</a>
					</div>
				</div>
			</div>
		</div>
		<div class="col-12 col-md-6 p-2">
			<div class="bg-light quickstart">
				<h3 class="text-center">Open Source</h3>
				<p class="text-center">All code is available at <a href="https://github.com/Cybersteam00/svelte-cyberComp/tree/main/src/lib" class="link" target="_blank">github.com</a></p>
			</div>
		</div>
		<div class="col-12 col-md-6 p-2">
			<div class="bg-light quickstart">
				<h3 class="text-center">Written in Typescript</h3>
				<p class="text-center">For solid code typing and autocompletion</p>
				<img src="{import.meta.env.VITE_BASE_URL}/image/AutocompletionExample.jpg" alt="--autocompletion bsp--" style="width: 100%" />
			</div>
		</div>
	</div>
</div>