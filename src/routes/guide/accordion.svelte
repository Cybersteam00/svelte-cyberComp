<script lang="ts">
	import Counter from "$component/Counter.svelte";
	import {Accordion, AccordionItem} from "$lib/index";
	import { slide } from 'svelte/transition';
</script>

<svelte:head>
	<title>Svelte Cyber Comp - Accordion</title>
</svelte:head>

<h1>Accordion</h1>
<div class="overview">
	<div>
		<p class="h5">Components</p>
		<div class="d-flex">
			<div class="card">
				<div class="card-header text-white bg-primary">Accordion</div>
				<div class="card-body">
					<p>
						<span class="ps-2">Attributes:</span>
						<span class="badge bg-secondary">alwaysOpen</span>
						<span class="badge bg-secondary">animate</span>
					</p>
					<p>
						<span class="ps-2">Events:</span>
						<span class="badge bg-dark">toggle</span>
					</p>
					<p>
						<span class="ps-2">class prop: <i class="fas fa-check"></i></span>
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
<p>The default Accordion loads all content and only one AccordionItem is active. Disabled Accordions won't be activated, but their content will be loaded regardless.</p>
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

<p>It's also possible to preselect an Item.</p>
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
<div class="grid-dualPagination custom-pageControl-el">
	<div>
		<p>Default</p>
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
	<div>
		<p>Preselect</p>
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

<p class="h3">Animation</p>
<p>Since these Components are build with svelte, it's possible to use svelte-animation to slide your items in and out. Or use other animations. Additionaly to the animation, <code>Accordion</code> needs <code>animate</code> in order for them to work propertly.</p>
<p class="alert alert-info">NOTE: Adding animation automaticly makes your content lazyLoaded, since they need to be destroyed and reinitialized in order for the animations to work. Therefore svelte-animation on <code>loadOnce</code> items only work once.</p>
<div class="grid-dualPagination custom-pageControl-el">
	<div>
		<p>Default</p>
		<Accordion animate class="accordion">
			<AccordionItem class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #1
					</button>
				</div>
				<div class="accordion-body" slot="body" transition:slide>
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
				<div class="accordion-body" slot="body" transition:slide>
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
				<div class="accordion-body" slot="body" transition:slide>
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
	<div>
		<p>Always Open</p>
		<Accordion animate alwaysOpen class="accordion">
			<AccordionItem class="accordion-item">
				<div slot="header">
					<button class="accordion-button" type="button">
						Accordion Item #1
					</button>
				</div>
				<div class="accordion-body" slot="body" transition:slide>
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
				<div class="accordion-body" slot="body" transition:slide>
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
				<div class="accordion-body" slot="body" transition:slide>
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
<Accordion animate>
	<AccordionItem>
		<div slot="header">
			...
		</div>
		<div slot="body" transition:slide>
			...
		</div>
	</AccordionItem>
	<AccordionItem lazy loadOnce>
		<div slot="header">
			...
		</div>
		<div slot="body" transition:slide>
			...
		</div>
	</AccordionItem>
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