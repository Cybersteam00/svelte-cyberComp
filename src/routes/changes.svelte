<svelte:head>
	<title>Svelte Cyber Comp - Release Notes</title>
</svelte:head>

<h1>Release Notes</h1>
<div>
	<h2>Version 1.0.1</h2>
	<p>Some smaller changes and fixes have been made. And the documentation-site has been updated.</p>

	<ul>
		<li>Changed the alorithmn for compact pagination, for a more predictable behavior:</li>
		<ul>
			<li>First two and last two pages will always be clickable</li>
			<li>If you are on the first or last two pages, the lookup-pages will be docked at them. Like a ship that docks on a port.</li>
			<li>Compact Pages will be displayed, if there are at least 4 Pages to compress.</li>
		</ul>
		<li>Changed the context-keys to prevent possible keyCollision in the future.</li>
		<li>Exposed attribute <code>currentPage</code> for Datatable to enable 'jump to Page' functionality.</li>
		<li>If you have a sorted DataTable and filter by some columns, the table retains it's sortet Data.</li>
		<ul>
			<li>You no longer need event-listeners for you input-elements to run your filterFunction.</li>
			<li>I have yet to find a way to run a filterFunction internally and have the UI update correctly. The data itself was correct, but the displayed data wasn't updated. For now you can filter your array externally and have the correct data displayed in your UI while retaining the sort.</li>
		</ul>
		<li>Accordion now animates with CSS-transition. For them smooth transitions. By extension the attribute <code>animate</code> has been removed.</li>
		<li>Accordion can now be opened and closed via script.</li>
		<li>Tabs can now be opened via script.</li>
	</ul>
</div>

<hr />

<div>
	<h2>Version 1.0</h2>
	<p>It's finally in a solid production-ready state. All the neccessary features are ready.</p>
	<p>A few minor things have changed from 0.9, like name changes. Nothing major.</p>
	<p>The additional components 'Accordion' and 'AccordionItem' have been added.</p>
	<p>The documentation-site has been updated.</p>
</div>
