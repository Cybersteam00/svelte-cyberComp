<script lang="ts">
	import Counter from "$component/Counter.svelte";
	import { Tab, TabContent, Tabs } from "$lib/index";
</script>

<svelte:head>
	<title>Svelte Cyber Comp - Tabs</title>
</svelte:head>

<h1>Tabs</h1>
<div class="overview">
	<div>
		<p class="h5">Components</p>
		<div class="d-flex">
			<div class="card">
				<div class="card-header text-white bg-primary">Tabs</div>
				<div class="card-body">
					<p>
						<span class="ps-2">Events:</span>
						<span class="badge bg-dark">tabChanged</span>
					</p>
					<p>
						<span class="ps-2">class prop: <i class="fas fa-check"></i></span>
					</p>
				</div>
			</div>
			<div class="card">
				<div class="card-header text-white bg-primary">Tab</div>
				<div class="card-body">
					<p>
						<span class="ps-2">Attributes:</span>
						<span class="badge bg-secondary">active</span>
						<span class="badge bg-secondary">disabled</span>
					</p>
					<p>
						<span class="ps-2">class prop: <i class="fas fa-check"></i></span>
					</p>
				</div>
			</div>
			<div class="card">
				<div class="card-header text-white bg-primary">TabContent</div>
				<div class="card-body">
					<p>
						<span class="ps-2">Attributes:</span>
						<span class="badge bg-secondary">lazy</span>
						<span class="badge bg-secondary">loadOnce</span>
					</p>
					<p>
						<span class="ps-2">class prop: <i class="fas fa-check"></i></span>
					</p>
				</div>
			</div>
		</div>
	</div>
	<div>
		<p class="h5">Internal css classes</p>
		<div class="d-flex">
			<div class="card">
				<div class="card-header text-white bg-primary">Tab</div>
				<div class="card-body">
					<p>nav-link, disabled, active</p>
				</div>
			</div>
			<div class="card">
				<div class="card-header text-white bg-primary">TabContent</div>
				<div class="card-body">
					<p>active</p>
				</div>
			</div>
		</div>
	</div>
</div>

<hr />

<p class="h3">Default Tabs</p>
<p>The default Tab Component loads all Content. Disabled Tabs won't be activated, but their content will be loaded regardless.</p>
<Tabs>
	<ul class="nav nav-tabs">
		<Tab class="nav-item">Content 1</Tab>
		<Tab class="nav-item">Content 2</Tab>
		<Tab class="nav-item">Content 3</Tab>
		<Tab disabled>Content 4</Tab>
	</ul>
	<div class="tab-content">
		<TabContent class="tab-pane">
			<div>Content 1</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane">
			<div>Content 2</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane">
			<div>Content 3</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane">
			<div>Content 4</div>
			<Counter />
		</TabContent>
	</div>
</Tabs>

<div class="highlight">
	<pre class="chroma"><code>{`
<Tabs>
	<ul>
		<Tab>Content 1</Tab>
		<Tab>Content 2</Tab>
		<Tab>Content 3</Tab>
		<Tab disabled>Content 4</Tab>
	</ul>
	<TabContent>
		<div>Content 1</div>
		<Counter />
	</TabContent>
	<TabContent>
		...
	</TabContent>
	...
</Tabs>`}</code></pre>
</div>

<hr />

<p>It's also possible to preselect the active Tab.</p>
<Tabs>
	<ul class="nav nav-tabs">
		<Tab class="nav-item">Content 1</Tab>
		<Tab class="nav-item" active>Content 2</Tab>
		<Tab class="nav-item">Content 3</Tab>
		<Tab class="nav-item" disabled>Content 4</Tab>
	</ul>
	<div class="tab-content">
		<TabContent class="tab-pane">
			<div>Content 1</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane">
			<div>Content 2</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane">
			<div>Content 3</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane">
			<div>Content 4</div>
			<Counter />
		</TabContent>
	</div>
</Tabs>

<div class="highlight">
	<pre class="chroma"><code>{`
<Tabs>
	<ul>
		<Tab>Content 1</Tab>
		<Tab active>Content 2</Tab>
		...
	</ul>
	<TabContent>
		<div>Content 1</div>
		<Counter />
	</TabContent>
	<TabContent>
		...
	</TabContent>
	...
</Tabs>`}</code></pre>
</div>

<hr />

<p>If you preselected a disabled Tab, it won't be activated.</p>
<Tabs>
	<ul class="nav nav-tabs">
		<Tab class="nav-item">Content 1</Tab>
		<Tab class="nav-item">Content 2</Tab>
		<Tab class="nav-item">Content 3</Tab>
		<Tab class="nav-item" active disabled>Content 4</Tab>
	</ul>
	<div class="tab-content">
		<TabContent class="tab-pane">
			<div>Content 1</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane">
			<div>Content 2</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane">
			<div>Content 3</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane">
			<div>Content 4</div>
			<Counter />
		</TabContent>
	</div>
</Tabs>

<div class="highlight">
	<pre class="chroma"><code>{`
<Tabs>
	<ul>
		...
		<Tab>Content 3</Tab>
		<Tab active disabled>Content 4</Tab>
	</ul>
	...
	<TabContent>
		...
	</TabContent>
	<TabContent>
		...
	</TabContent>
</Tabs>`}</code></pre>
</div>

<hr />

<p class="h3">Lazy loading and persistent content</p>
<p>Under certain circumstances you only want to load your content, once your user selected the respective tab. To enable lazyyload, add the <code>lazy</code> attribute to <code>TabContent</code>.</p>
<p>Keep in mind the content will be loaded every time the tab is activated. To only load it once, add <code>loadOnce</code>.</p>
<Tabs>
	<ul class="nav nav-tabs">
		<Tab class="nav-item" active>Lazy Content 1</Tab>
		<Tab class="nav-item">Lazy Content 2</Tab>
		<Tab class="nav-item">Lazy Content 3</Tab>
		<Tab class="nav-item" disabled>Content 4</Tab>
	</ul>
	<div class="tab-content">
		<TabContent class="tab-pane" lazy>
			<div>Lazy Content 1</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane" lazy>
			<div>Lazy Content 2</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane" lazy loadOnce>
			<div>Lazy Content 3 (Persistent)</div>
			<Counter />
		</TabContent>
		<TabContent class="tab-pane" lazy loadOnce>
			<div>Content 4</div>
			<Counter />
		</TabContent>
	</div>
</Tabs>

<div class="highlight">
	<pre class="chroma"><code>{`
<Tabs>
	<ul>
		...
	</ul>
	<TabContent lazy>
		..
	</TabContent>
	<TabContent lazy>
		..
	</TabContent>
	<TabContent lazy loadOnce>
		..
	</TabContent>
	...
</Tabs>`}</code></pre>
</div>

<hr />

<p class="h3">Nested Tabs</p>
<p>Use nested Tabs to group related Content together.</p>
<Tabs>
	<ul class="nav nav-tabs">
		<Tab class="nav-item" active>Content 1</Tab>
		<Tab class="nav-item">Lazy Content 2</Tab>
		<Tab class="nav-item">Lazy Content 3 (Persistend)</Tab>
		<Tab class="nav-item" disabled>Content 4</Tab>
	</ul>
	<div class="tab-content">
		<TabContent class="tab-pane p-4">
			<Tabs>
				<ul class="nav nav-tabs">
					<Tab class="nav-item" active>Content 1</Tab>
					<Tab class="nav-item">Lazy Content 2</Tab>
					<Tab class="nav-item">Lazy Content 3 (Persistend)</Tab>
					<Tab class="nav-item" disabled>Content 4</Tab>
				</ul>
				<div class="tab-content">
					<TabContent class="tab-pane">
						<div>Content 1</div>
						<Counter />
					</TabContent>
					<TabContent class="tab-pane" lazy>
						<div>Lazy Content 2</div>
						<Counter />
					</TabContent>
					<TabContent class="tab-pane" lazy loadOnce>
						<div>Lazy Content 3 (Persistent)</div>
						<Counter />
					</TabContent>
					<TabContent class="tab-pane" lazy loadOnce>
						<div>Content 4</div>
						<Counter />
					</TabContent>
				</div>
			</Tabs>
		</TabContent>
		<TabContent class="tab-pane p-4" lazy>
			<Tabs>
				<ul class="nav nav-tabs">
					<Tab class="nav-item" active>Content 1</Tab>
					<Tab class="nav-item">Lazy Content 2</Tab>
					<Tab class="nav-item">Lazy Content 3 (Persistend)</Tab>
					<Tab class="nav-item" disabled>Content 4</Tab>
				</ul>
				<div class="tab-content">
					<TabContent class="tab-pane">
						<div>Lazy Content 1</div>
						<Counter />
					</TabContent>
					<TabContent class="tab-pane" lazy>
						<div>Lazy Content 2</div>
						<Counter />
					</TabContent>
					<TabContent class="tab-pane" lazy loadOnce>
						<div>Lazy Content 3 (Persistent)</div>
						<Counter />
					</TabContent>
					<TabContent class="tab-pane" lazy loadOnce>
						<div>Content 4</div>
						<Counter />
					</TabContent>
				</div>
			</Tabs>
		</TabContent>
		<TabContent class="tab-pane p-4" lazy loadOnce>
			<Tabs>
				<ul class="nav nav-tabs">
					<Tab class="nav-item" active>Content 1</Tab>
					<Tab class="nav-item">Lazy Content 2</Tab>
					<Tab class="nav-item">Lazy Content 3 (Persistend)</Tab>
					<Tab class="nav-item" disabled>Content 4</Tab>
				</ul>
				<div class="tab-content">
					<TabContent class="tab-pane">
						<div>Lazy Content 1</div>
						<Counter />
					</TabContent>
					<TabContent class="tab-pane" lazy>
						<div>Lazy Content 2</div>
						<Counter />
					</TabContent>
					<TabContent class="tab-pane" lazy loadOnce>
						<div>Lazy Content 3 (Persistent)</div>
						<Counter />
					</TabContent>
					<TabContent class="tab-pane" lazy loadOnce>
						<div>Content 4</div>
						<Counter />
					</TabContent>
				</div>
			</Tabs>
		</TabContent>
		<TabContent class="tab-pane p-4" lazy loadOnce>
			<div>Content 4</div>
			<Counter />
		</TabContent>
	</div>
</Tabs>

<div class="highlight">
	<pre class="chroma"><code>{`
<Tabs>
	<ul>
		<Tab>Lazy Content 1</Tab>
		...
	</ul>
	<TabContent>
		<Tabs>
			...
		</Tabs>
	</TabContent>
	...
</Tabs>`}</code></pre>
</div>