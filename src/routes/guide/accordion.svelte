<script lang="ts">
	import Counter from "$component/Counter.svelte";
	import {Accordion, AccordionItem} from "$lib/index";
	import { slide } from 'svelte/transition';

	let accordion: Accordion;
</script>

<svelte:head>
	<title>Svelte Cyber Comp - Accordion</title>
</svelte:head>

<h1>Accordion</h1>
<div class="row">
	<div class="col-12 col-lg-6">
		<p class="h5">Components</p>
		<div class="d-flex">
			<div class="card">
				<div class="card-header text-white bg-primary">Accordion</div>
				<div class="card-body">
					<p>
						<span class="ps-2">Attributes:</span>
						<span class="badge bg-secondary">alwaysOpen</span>
					</p>
					<p>
						<span class="ps-2">Functions:</span>
						<span class="badge bg-dark">open</span>
						<span class="badge bg-dark">close</span>
					</p>
					<p>
						<span class="ps-2">$$props: class</span>
					</p>
				</div>
			</div>
			<div class="card">
				<div class="card-header text-white bg-primary">AccordionItem</div>
				<div class="card-body">
					<p>
						<span class="ps-2">Attributes:</span>
						<span class="badge bg-secondary">active</span>
						<span class="badge bg-secondary">disabled</span>
						<span class="badge bg-secondary">lazy</span>
						<span class="badge bg-secondary">loadOnce</span>
					</p>
					<p>
						<span class="ps-2">Slots:</span>
						<span class="badge bg-success">header</span>
						<span class="badge bg-success">body</span>
					</p>
					<p>
						<span class="ps-2">Events:</span>
						<span class="badge bg-dark">open</span>
						<span class="badge bg-dark">close</span>
					</p>
					<p>
						<span class="ps-2">$$props: class</span>
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="col-12 col-lg-6">
		<p class="h5">Internal css classes</p>
		<div class="d-flex">
			<div class="card">
				<div class="card-header text-white bg-primary">AccordionItem</div>
				<div class="card-body">
					<ul>
						<li>active, disabled</li>
						<ul>
							<li>accordion-header</li>
						</ul>
						<ul>
							<li>accordion-collapse, collapse, show</li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>

<hr />
<p class="h3">Default Accordion</p>
<p>The default Accordion loads all content and only one AccordionItem can be active at a time. Disabled Items won't be activated, but their content will be loaded regardless.</p>
<Accordion class="accordion">
	<AccordionItem class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #1
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 1</p>
			<Counter></Counter>
		</div>
	</AccordionItem>
	<AccordionItem class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #2
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 2</p>
			<Counter></Counter>
		</div>
	</AccordionItem>
	<AccordionItem class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #3
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 3</p>
			<Counter></Counter>
		</div>
	</AccordionItem>
	<AccordionItem disabled class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #4 (Disabled)
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 4</p>
			<Counter></Counter>
		</div>
	</AccordionItem>
</Accordion>

<div class="highlight">
	<pre class="chroma"><code>{`
<Accordion>
	<AccordionItem>
		<div slot="header">
			...
		</div>
		<div slot="body">
			...
		</div>
	</AccordionItem>
	<AccordionItem>
		<div slot="header">
			...
		</div>
		<div slot="body">
			...
		</div>
	</AccordionItem>
	...
</Accordion>`}</code></pre>
</div>

<hr />

<p>It's also possible to preselect an Item with <code>active</code>.</p>
<Accordion class="accordion">
	<AccordionItem active class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #1
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 1</p>
			<Counter></Counter>
		</div>
	</AccordionItem>
	<AccordionItem class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #2
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 2</p>
			<Counter></Counter>
		</div>
	</AccordionItem>
	<AccordionItem class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #3
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 3</p>
			<Counter></Counter>
		</div>
	</AccordionItem>
	<AccordionItem disabled class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #4 (Disabled)
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 4</p>
			<Counter></Counter>
		</div>
	</AccordionItem>
</Accordion>

<div class="highlight">
	<pre class="chroma"><code>{`
<Accordion>
	<AccordionItem active>
		<div slot="header">
			...
		</div>
		<div slot="body">
			...
		</div>
	</AccordionItem>
	<AccordionItem>
		<div slot="header">
			...
		</div>
		<div slot="body">
			...
		</div>
	</AccordionItem>
</Accordion>`}</code></pre>
</div>

<hr />

<p>To have multiple AccordionItems active, add <code>allwasOpen</code> to <code>Accordion</code>.</p>
<div class="row">
	<div class="col-12 col-lg-6">
		<b>Default</b>
		<Accordion alwaysOpen class="accordion">
			<AccordionItem class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #1
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 1</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #2
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 2</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #3
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 3</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem disabled class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #4 (Disabled)
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 4</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
		</Accordion>
	</div>
	<div class="col-12 col-lg-6">
		<b>Preselect</b>
		<Accordion alwaysOpen class="accordion">
			<AccordionItem active class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #1
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 1</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem active class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #2
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 2</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #3
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 3</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem disabled class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #4 (Disabled)
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 4</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
		</Accordion>
	</div>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<Accordion alwaysOpen>
	<AccordionItem>
		<div slot="header">
			...
		</div>
		<div slot="body">
			...
		</div>
	</AccordionItem>
</Accordion>`}</code></pre>
</div>

<hr />

<p class="h3">Lazyload and Persistence</p>
<p>It's possible to lazyload Accordion Content by adding <code>lazy</code> to <code>AccordionItem</code>.</p>
<p>Keep in mind the content will be loaded every time the item is activated. To only load it once, add <code>loadOnce</code>.</p>

<div class="row">
	<div class="col-12 col-lg-6">
		<b>Regular</b>
		<Accordion class="accordion">
			<AccordionItem lazy class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Lazy Accordion Item #1
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 1</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem lazy class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Lazy Accordion Item #2
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 2</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem lazy loadOnce class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Lazy Accordion Item #3 (persistend)
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 3</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem lazy disabled class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Lazy Accordion Item #4 (Disabled)
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 4</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
		</Accordion>
	</div>
	<div class="col-12 col-lg-6">
		<b>Alwasy open</b>
		<Accordion alwaysOpen class="accordion">
			<AccordionItem active lazy class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Lazy Accordion Item #1
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 1</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem lazy class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Lazy Accordion Item #2
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 2</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem active lazy loadOnce class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Lazy Accordion Item #3 (persistend)
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 3</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
			<AccordionItem lazy disabled class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Lazy Accordion Item #4 (Disabled)
					</button>
				</div>
				<div class="accordion-body" slot="body">
					<p>Body 4</p>
					<Counter></Counter>
				</div>
			</AccordionItem>
		</Accordion>
	</div>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<Accordion>
	<AccordionItem lazy>
		<div slot="header">
			...
		</div>
		<div slot="body">
			...
		</div>
	</AccordionItem>
	<AccordionItem lazy loadOnce>
		<div slot="header">
			...
		</div>
		<div slot="body">
			...
		</div>
	</AccordionItem>
	...
</Accordion>`}</code></pre>
</div>

<hr />

<p class="h3">Nested Accordions</p>
<p>If neccessary, Accordions can be nested.</p>
<Accordion class="accordion">
	<AccordionItem active class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #1
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<Accordion class="accordion">
				<AccordionItem class="accordion-item">
					<div slot="header">
						<button class="accordion-button" type="button">
							Nested Accordion Item #1
						</button>
					</div>
					<div class="accordion-body" slot="body">
						<p>Body 1</p>
						<Counter></Counter>
					</div>
				</AccordionItem>
				<AccordionItem class="accordion-item">
					<div slot="header">
						<button class="accordion-button" type="button">
							Nested Accordion Item #2
						</button>
					</div>
					<div class="accordion-body" slot="body">
						<p>Body 2</p>
						<Counter></Counter>
					</div>
				</AccordionItem>
				<AccordionItem class="accordion-item">
					<div slot="header">
						<button class="accordion-button" type="button">
							Nested Accordion Item #3
						</button>
					</div>
					<div class="accordion-body" slot="body">
						<p>Body 3</p>
						<Counter></Counter>
					</div>
				</AccordionItem>
				<AccordionItem disabled class="accordion-item">
					<div slot="header">
						<button class="accordion-button" type="button">
							Nested Accordion Item #4 (Disabled)
						</button>
					</div>
					<div class="accordion-body" slot="body">
						<p>Body 4</p>
						<Counter></Counter>
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	</AccordionItem>
	<AccordionItem class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #2
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<Accordion class="accordion">
				<AccordionItem class="accordion-item">
					<div slot="header">
						<button class="accordion-button" type="button">
							Accordion Item #1
						</button>
					</div>
					<div class="accordion-body" slot="body">
						<p>Body 1</p>
						<Counter></Counter>
					</div>
				</AccordionItem>
				<AccordionItem class="accordion-item">
					<div slot="header">
						<button class="accordion-button" type="button">
							Accordion Item #2
						</button>
					</div>
					<div class="accordion-body" slot="body">
						<p>Body 2</p>
						<Counter></Counter>
					</div>
				</AccordionItem>
				<AccordionItem loadOnce class="accordion-item">
					<div slot="header">
						<button class="accordion-button" type="button">
							Accordion Item #3 (persistend)
						</button>
					</div>
					<div class="accordion-body" slot="body">
						<p>Body 3</p>
						<Counter></Counter>
					</div>
				</AccordionItem>
				<AccordionItem disabled class="accordion-item">
					<div slot="header">
						<button class="accordion-button" type="button">
							Accordion Item #4 (Disabled)
						</button>
					</div>
					<div class="accordion-body" slot="body">
						<p>Body 4</p>
						<Counter></Counter>
					</div>
				</AccordionItem>
			</Accordion>
		</div>
	</AccordionItem>
</Accordion>

<div class="highlight">
	<pre class="chroma"><code>{`
<Accordion>
	<AccordionItem>
		<div slot="header">
			...
		</div>
		<div slot="body">
			<Accordion>
				<AccordionItem>
					<div slot="header">
						...
					</div>
					<div slot="body">
						...
					</div>
				</AccordionItem>
				<AccordionItem>
					<div slot="header">
						...
					</div>
					<div slot="body">
						...
					</div>
				</AccordionItem>
				...
			</Accordion>
		</div>
	</AccordionItem>
	<AccordionItem>
		<div slot="header">
			...
		</div>
		<div slot="body">
			...
		</div>
	</AccordionItem>
	...
</Accordion>`}</code></pre>
</div>

<hr />

<p class="h3">Open and close via buttons</p>
<p>If so desired, AccordionItems can be opened and closed via script with <code>open()</code> and <code>close()</code>. The number indicates which Item will be opened / closed</p>
<Accordion class="accordion" bind:this={accordion}>
	<AccordionItem class="accordion-item" active>
		<div slot="header">
			<button class="accordion-button" type="button">
				Accordion Item #1
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 1</p>
			<Counter></Counter>
			<button type="button" class="btn btn-dark" on:click={() => {accordion.close(1)}}>Close #1</button>
			<button type="button" class="btn btn-dark" on:click={() => {accordion.open(2)}}>Open #2</button>
		</div>
	</AccordionItem>
	<AccordionItem lazy class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Lazy Accordion Item #2
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 2</p>
			<Counter></Counter>
			<button type="button" class="btn btn-dark" on:click={() => {accordion.close(2)}}>Close #2</button>
			<button type="button" class="btn btn-dark" on:click={() => {accordion.open(3)}}>Open #3</button>
		</div>
	</AccordionItem>
	<AccordionItem lazy loadOnce class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Lazy Accordion Item #3 (persistend)
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 3</p>
			<Counter></Counter>
			<button type="button" class="btn btn-dark" on:click={() => {accordion.close(3)}}>Close #3</button>
			<button type="button" class="btn btn-dark" on:click={() => {accordion.open(1)}}>Open #1</button>
			<button type="button" class="btn btn-dark" on:click={() => {accordion.open(4)}}>Open #4</button>
		</div>
	</AccordionItem>
	<AccordionItem lazy disabled class="accordion-item">
		<div slot="header">
			<button class="accordion-button" type="button">
				Lazy Accordion Item #4 (Disabled)
			</button>
		</div>
		<div class="accordion-body" slot="body">
			<p>Body 4</p>
			<Counter></Counter>
		</div>
	</AccordionItem>
</Accordion>

<div class="highlight">
	<pre class="chroma"><code>{`
let accordion
<Accordion bind:this={accordion}>
	<AccordionItem lazy>
		<div slot="body">
			<button on:click={() => {accordion.open(2)}}></button>
			...
		</div>
	</AccordionItem>
	<AccordionItem lazy loadOnce>
		...
	</AccordionItem>
	...
</Accordion>`}</code></pre>
</div>