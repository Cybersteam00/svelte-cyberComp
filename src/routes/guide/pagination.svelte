<script lang="ts" context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import PaginationContr from "$component/PaginationContr.svelte";
	import PaginationContrCls from "$component/PaginationContrCls.svelte";
	import { Pagination, PaginationControl } from "$lib/index";
	import type User from "$model/User";
	import { Gender } from "$model/User";
	import { users } from "$model/users";
	import { onMount } from "svelte";

	let perPage1: number = 4;
	let currentPage: number = 1;
	let currentPage3: number = 1;

	let maxitems: number = 12;
	let users2: User[] = [];
	let searchname: string = "";
	let searchname2: string = "";

	let promise: Promise<any> = undefined;

	onMount(() => {
		changePage(1, 12);
	});

	function changePage(tPageIndex: number, tPerPage: number) {
		promise = new Promise((resolve, reject) => {
			window.setTimeout(async () => {
				var tmp = users.filter(u => true);

				users2 = tmp.slice((tPageIndex-1) * tPerPage, tPageIndex * tPerPage);
				maxitems = tmp.length;

				resolve(users2);
			}, 1000);
		});
	}
</script>

<svelte:head>
	<title>Svelte Cyber Comp - Pagination</title>
</svelte:head>

<h1>Pagination</h1>
<div class="overview">
	<div>
		<p class="h5">Components</p>
		<div class="d-flex">
			<div class="card">
				<div class="card-header text-white bg-primary">Pagination</div>
				<div class="card-body">
					<p>
						<span class="ps-2">Attributes:</span>
						<span class="badge bg-secondary">items</span>
						<span class="badge bg-secondary">perPage</span>
						<span class="badge bg-secondary">currentPage</span>
						<span class="badge bg-secondary">lookupPages</span>
						<span class="badge bg-secondary">noControl</span>
					</p>
					<p>
						<span class="ps-2">Slots:</span>
						<span class="badge bg-success">body</span>
						<span class="badge bg-success">pageControl</span>
					</p>
					<p>
						<span class="ps-2">Events:</span>
						<span class="badge bg-dark">pageChanged</span>
					</p>
					<p>
						<span class="ps-2">class prop: <i class="fas fa-check"></i></span>
					</p>
				</div>
			</div>
			<PaginationContr />
		</div>
	</div>
	<div>
		<p class="h5">Internal css classes</p>
		<div class="d-flex">
			<div class="card">
				<div class="card-header text-white bg-primary">Pagination</div>
				<div class="card-body">
					<p>pagination-items</p>
				</div>
			</div>
			<PaginationContrCls />
		</div>
	</div>
</div>

<hr />

<p class="h3">Default Pagination</p>
<p>The default Pagination displays 25 Items with a full list of available Pages. Clicking on a pageNr automaticly updates the content displayed on screen. If you are on the first or last page, the forward or backward button will be disabled.</p>
<p>To design your item, you need a root-Element that is asigned to the body-slot and can acces the JS-Object used for that current item: <code>{`<div slot="body" let:prop={item}></div>`}</code>. If you have Typescript enabled, all your items properties and functions will be autocompletet for a more stable development process.</p>
<Pagination items={users} class="grid-users">
	<div class="card" slot="body" let:prop={user}>
		<div class="card-header">{user.firstName} {user.lastName}</div>
		<div class="card-body">
			<p>Age: {user.age}</p>
			<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
			<p>Adress: {user.adress.street}</p>
		</div>
	</div>
</Pagination>

<div class="highlight">
	<pre class="chroma"><code
			>{`
<Pagination items={users}>
	<div class="card" slot="body" let:prop={user}>
		<div class="card-header">{user.firstName} {user.lastName}</div>
		...
	</div>
</Pagination>`}</code
		></pre>
</div>

<hr />

<p class="h3">Custom nr of items per Page</p>
<p>If you want to display less items (or more) simply define the number with the <code>perPage</code> Attribute. The Page-control will generate the appropiate nr of pages needed.</p>

<Pagination items={users} perPage={perPage1} class="grid-users">
	<div class="card" slot="body" let:prop={user}>
		<div class="card-header">{user.firstName} {user.lastName}</div>
		<div class="card-body">
			<p>Age: {user.age}</p>
			<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
			<p>Adress: {user.adress.street}</p>
		</div>
	</div>
</Pagination>

<div class="highlight">
	<pre class="chroma"><code
			>{`
<Pagination items={users} perPage={4}}>
	<div class="card" slot="body" let:prop={user}>
		...
	</div>
</Pagination>`}</code
		></pre>
</div>

<hr />

<p class="h3">Controlable Nr of Items</p>
<p>
	To include a control-Element for the displayable nr of items, you need to append the elements to the <code>pageControl</code> slot. Changing the <code>perPage</code> Value automaticly updates the controls.
	If your current active page will be deleted due to less available Pages, the last page will be automaticly selected.
</p>

<div class="custom-pageControl-el">
	<Pagination items={users} perPage={perPage1} class="grid-users">
		<div class="card" slot="body" let:prop={user}>
			<div class="card-header">{user.firstName} {user.lastName}</div>
			<div class="card-body">
				<p>Age: {user.age}</p>
				<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
				<p>Adress: {user.adress.street}</p>
			</div>
		</div>
		<div slot="pageControl" style="display: flex">
			<span>per Page: </span>
			<div>
				<input type="number" class="form-control" bind:value={perPage1} />
			</div>
		</div>
	</Pagination>
</div>

<div class="highlight">
	<pre class="chroma"><code
			>{`
<Pagination items={users} {perPage}}>
	<div class="card" slot="body" let:prop={user}>
		...
	</div>
	<div slot="pageControl">
		<input type="number" bind:value={perPage} />
	</div>
</Pagination>`}</code
		></pre>
</div>

<hr />

<p class="h3">Compact Pages</p>
<p>
	If you want to display a compact pageControl instead of all 20 or more available Pages, you can use <code>lookupPages</code>. That way the first 4 Pages and your nr of prevoius and next pages will
	be clickable.
</p>

<Pagination items={users} perPage={1} lookupPages={2} class="grid-users">
	<div class="card" slot="body" let:prop={user}>
		<div class="card-header">{user.firstName} {user.lastName}</div>
		<div class="card-body">
			<p>Age: {user.age}</p>
			<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
			<p>Adress: {user.adress.street}</p>
		</div>
	</div>
</Pagination>

<div class="highlight">
	<pre class="chroma"><code
			>{`
<Pagination items={users} perPage={1} lookupPages={2}>
	<div class="card" slot="body" let:prop={user}>
		...
	</div>
</Pagination>`}</code
		></pre>
</div>

<hr />

<p class="h3">Jump to Page</p>
<p>
	Under certain circumstances you want to include a way to directly jump to a Page. Well you can. With <code>pageControl</code> slot and the <code>currentPage</code> value. Doing it this way was a councious
	choice to allow you the artistic freedom of your own pagination-control.
</p>
<p>Don't worry, your user can not go outside the available range.</p>

<div class="custom-pageControl-el">
	<Pagination items={users} perPage={1} lookupPages={1} bind:currentPage class="grid-users">
		<div class="card" slot="body" let:prop={user}>
			<div class="card-header">{user.firstName} {user.lastName}</div>
			<div class="card-body">
				<p>Age: {user.age}</p>
				<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
				<p>Adress: {user.adress.street}</p>
			</div>
		</div>
		<div slot="pageControl" style="display: flex">
			<span>jump to: </span>
			<div>
				<input type="number" class="form-control" bind:value={currentPage} />
			</div>
		</div>
	</Pagination>
</div>

<div class="highlight">
	<pre class="chroma"><code
			>{`
<Pagination items={users} perPage={1} lookupPages={1} bind:currentPage>
	<div class="card" slot="body" let:prop={user}>
		...
	</div>
	<div slot="pageControl">
		<input type="number" class="form-control" bind:value={currentPage} />
	</div>
</Pagination>`}</code
		></pre>
</div>

<hr />

<p class="h3">Filter Items</p>
<p />

<div class="grid-dualPagination custom-pageControl-el">
	<div>
		<Pagination items={users.filter((user) => user.firstName.startsWith(searchname))} perPage={perPage1} class="grid-users">
			<div class="card" slot="body" let:prop={user}>
				<div class="card-header">{user.firstName} {user.lastName}</div>
				<div class="card-body">
					<p>Age: {user.age}</p>
					<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
					<p>Adress: {user.adress.street}</p>
				</div>
			</div>
			<div slot="pageControl" style="display: flex">
				<span>FirstName starts with: </span>
				<div>
					<input type="text" class="form-control" bind:value={searchname} />
				</div>
			</div>
		</Pagination>

		<div class="highlight">
			<pre class="chroma"><code
					>{`
	<Pagination items={users.filter(() => {...})} {perPage}}>
		<div class="card" slot="body" let:prop={user}>
			...
		</div>
		<div slot="pageControl">
			<input type="text" bind:value={searchname} />
		</div>
	</Pagination>`}</code
				></pre>
		</div>
	</div>
	<div>
		<Pagination items={users.filter((user) => user.firstName.startsWith(searchname2))} perPage={1} lookupPages={1} class="grid-users">
			<div class="card" slot="body" let:prop={user}>
				<div class="card-header">{user.firstName} {user.lastName}</div>
				<div class="card-body">
					<p>Age: {user.age}</p>
					<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
					<p>Adress: {user.adress.street}</p>
				</div>
			</div>
			<div slot="pageControl" style="display: flex">
				<span>FirstName starts with: </span>
				<div>
					<input type="text" class="form-control" bind:value={searchname2} />
				</div>
			</div>
		</Pagination>

		<div class="highlight">
			<pre class="chroma"><code
					>{`
	<Pagination items={users.filter(customFilterFunction)} {perPage}}>
		<div class="card" slot="body" let:prop={user}>
			...
		</div>
		<div slot="pageControl">
			<input type="text" bind:value={searchname} />
		</div>
	</Pagination>`}</code
				></pre>
		</div>
	</div>
</div>

<hr />

<p class="h3">Working with filtered Items from URL</p>
<p>
	If you can't load all items at once, to keep your webapp user friendly, you can still use this Pagination. It just required a bit of work, the <code>noControl</code> Attribute and the manual
	inclusion of <code>PaginationControl</code>. Make sure to keep the perPage the same and bind the <code>currentPage</code> to ensure a stable pageChange.
</p>
<p>This example implies your Response has the already filtered Items and the max nr of available items.</p>

<Pagination items={users2} perPage={4} noControl class="grid-users">
	<div class="card" slot="body" let:prop={user}>
		<div class="card-header">{user.firstName} {user.lastName}</div>
		<div class="card-body">
			<p>Age: {user.age}</p>
			<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
			<p>Adress: {user.adress.street}</p>
		</div>
	</div>
</Pagination>
<PaginationControl numberItems={maxitems} perPage={4} bind:currentPage={currentPage3} on:pageChanged={() => {changePage(currentPage3, 4)}}>
	<div slot="pageControl">
		{#await promise}
			<i class="fas fa-spinner fa-spin" />
		{:catch err}
			<p class="alert alert-danger">An error occured</p>
		{/await}
	</div>
</PaginationControl>

<div class="highlight">
	<pre class="chroma"><code
			>{`
<Pagination items={users} perPage={4} noControl>
	<div class="card" slot="body" let:prop={user}>
		...
	</div>
</Pagination>
<PaginationControl numberItems={maxitems} perPage={4} bind:currentPage on:pageChanged={customFunction}>
		<div slot="pageControl">
			{#await promise}
				<i class="fas fa-spinner fa-spin"></i>
			{:catch err}
				<p class="alert alert-danger">An error occured</p>
			{/await}
		</div>
	</PaginationControl>
`}</code
		></pre>
</div>

<hr />

<p class="h2">CSS</p>
<p>Anything below shows things possible with CSS. A seperate CSS-file is required.</p>

<div class="grid-dualPagination">
	<div class="no-first-and-last-btn">
		<p class="h3">Dont show 'First' and 'Last' btn</p>
		<Pagination items={users.slice(0,2)} class="grid-users">
			<div class="card" slot="body" let:prop={user}>
				<div class="card-header">{user.firstName} {user.lastName}</div>
				<div class="card-body">
					<p>Age: {user.age}</p>
					<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
					<p>Adress: {user.adress.street}</p>
				</div>
			</div>
		</Pagination>
	</div>
	<div>
		<p class="h3">PageControl at top</p>
		<div class="pageControl-top">
			<Pagination items={users.slice(0,2)} class="grid-users">
				<div class="card" slot="body" let:prop={user}>
					<div class="card-header">{user.firstName} {user.lastName}</div>
					<div class="card-body">
						<p>Age: {user.age}</p>
						<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
						<p>Adress: {user.adress.street}</p>
					</div>
				</div>
			</Pagination>
		</div>
	</div>
	<div>
		<p class="h3">Swap icons</p>
		<div class="swapPaginationIcons">
			<Pagination items={users.slice(0,2)} class="grid-users">
				<div class="card" slot="body" let:prop={user}>
					<div class="card-header">{user.firstName} {user.lastName}</div>
					<div class="card-body">
						<p>Age: {user.age}</p>
						<p>Gender: {user.gender == Gender.MALE ? 'Male': 'Female'}</p>
						<p>Adress: {user.adress.street}</p>
					</div>
				</div>
			</Pagination>
		</div>
	</div>
</div>