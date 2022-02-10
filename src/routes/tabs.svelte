<script lang="ts">
	import Counter from "$component/Counter.svelte";
	import { Tab, TabContent, Tabs } from "$lib/index";
</script>

<h1>Tabs</h1>
<div class="d-flex">
	<div class="card">
		<div class="card-header text-white bg-primary">Tabs</div>
		<div class="card-body">
			<p>
				<span class="ps-2">Events:</span>
				<span class="badge bg-dark">tabChanged</span>
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
		</div>
	</div>
</div>

<hr />

<p class="h3">Default Tabs</p>
<Tabs>
	<ul class="nav nav-tabs">
		<Tab>Content 1</Tab>
		<Tab>Content 2</Tab>
		<Tab>Content 3</Tab>
		<Tab disabled>Content 4</Tab>
	</ul>
	<div class="tab-content">
		<TabContent>
			<div>Content 1</div>
			<Counter />
		</TabContent>
		<TabContent>
			<div>Content 2</div>
			<Counter />
		</TabContent>
		<TabContent>
			<div>Content 3</div>
			<Counter />
		</TabContent>
		<TabContent>
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
		<div>Content 2</div>
		<Counter />
	</TabContent>
	<TabContent>
		<div>Content 3</div>
		<Counter />
	</TabContent>
	<TabContent>
		<div>Content 4</div>
		<Counter />
	</TabContent>
</Tabs>`}</code></pre>
</div>

<hr />

<p class="h3">Tabs with preselected tab</p>
<Tabs>
	<ul class="nav nav-tabs">
		<Tab>Content 1</Tab>
		<Tab active>Content 2</Tab>
		<Tab>Content 3</Tab>
		<Tab disabled>Content 4</Tab>
	</ul>
	<div class="tab-content">
		<TabContent>
			<div>Content 1</div>
			<Counter />
		</TabContent>
		<TabContent>
			<div>Content 2</div>
			<Counter />
		</TabContent>
		<TabContent>
			<div>Content 3</div>
			<Counter />
		</TabContent>
		<TabContent>
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
		<Tab>Content 3</Tab>
		<Tab disabled>Content 4</Tab>
	</ul>
	<TabContent>
		<div>Content 1</div>
		<Counter />
	</TabContent>
	<TabContent>
		<div>Content 2</div>
		<Counter />
	</TabContent>
	<TabContent>
		<div>Content 3</div>
		<Counter />
	</TabContent>
	<TabContent>
		<div>Content 4</div>
		<Counter />
	</TabContent>
</Tabs>`}</code></pre>
</div>

<hr />

<p class="h3">Tabs with lazy loading and persistent content</p>
<Tabs>
	<ul class="nav nav-tabs">
		<Tab active>Lazy Content 1</Tab>
		<Tab>Lazy Content 2</Tab>
		<Tab>Lazy Content 3</Tab>
		<Tab disabled>Content 4</Tab>
	</ul>
	<div class="tab-content">
		<TabContent lazy>
			<div>Lazy Content 1</div>
			<Counter />
		</TabContent>
		<TabContent lazy>
			<div>Lazy Content 2</div>
			<Counter />
		</TabContent>
		<TabContent lazy loadOnce>
			<div>Lazy Content 3 (Persistent)</div>
			<Counter />
		</TabContent>
		<TabContent lazy loadOnce>
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
		<Tab>Lazy Content 2</Tab>
		<Tab>Lazy Content 3</Tab>
		<Tab disabled>Content 4</Tab>
	</ul>
	<TabContent lazy>
		<div>Lazy Content 1</div>
		<Counter />
	</TabContent>
	<TabContent lazy>
		<div>Lazy Content 2</div>
		<Counter />
	</TabContent>
	<TabContent lazy loadOnce>
		<div>Lazy Content 3 (Persistent)</div>
		<Counter />
	</TabContent>
	<TabContent lazy loadOnce>
		<div>Content 4</div>
		<Counter />
	</TabContent>
</Tabs>`}</code></pre>
</div>

<hr />

<p class="h3">Disabled Tab selected</p>
<Tabs>
	<ul class="nav nav-tabs">
		<Tab>Lazy Content 1</Tab>
		<Tab>Lazy Content 2</Tab>
		<Tab>Lazy Content 3</Tab>
		<Tab active disabled>Content 4</Tab>
	</ul>
	<div class="tab-content">
		<TabContent lazy>
			<div>Lazy Content 1</div>
			<Counter />
		</TabContent>
		<TabContent lazy>
			<div>Lazy Content 2</div>
			<Counter />
		</TabContent>
		<TabContent lazy loadOnce>
			<div>Lazy Content 3 (Persistent)</div>
			<Counter />
		</TabContent>
		<TabContent lazy loadOnce>
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
		<Tab>Lazy Content 2</Tab>
		<Tab>Lazy Content 3</Tab>
		<Tab active disabled>Content 4</Tab>
	</ul>
	<TabContent lazy>
		<div>Lazy Content 1</div>
		<Counter />
	</TabContent>
	<TabContent lazy>
		<div>Lazy Content 2</div>
		<Counter />
	</TabContent>
	<TabContent lazy loadOnce>
		<div>Lazy Content 3 (Persistent)</div>
		<Counter />
	</TabContent>
	<TabContent lazy loadOnce>
		<div>Content 4</div>
		<Counter />
	</TabContent>
</Tabs>`}</code></pre>
</div>
