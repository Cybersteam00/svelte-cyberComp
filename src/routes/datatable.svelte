<script lang="ts">
	import {users} from "$model/users"
	import {Datatable, Tablehead} from "$lib/index";
	import type User from "$model/User";

	let sortet1: number = 0;
	let sortet2: number = 0;
	let sortet3: number = 0;
	let pagechanged1: number = 0;
	let pagechanged2: number = 0;

	function sortByFirstName(a: User, b:User){
		if(a.firstName > b.firstName){return -1}
		if(a.firstName < b.firstName){return 1}
		return 0
	}

function sortByLastName(a: User, b:User){
	if(a.lastName > b.lastName){return -1}
	if(a.lastName < b.lastName){return 1}
	return 0
}
</script>

<h1>Datatable</h1>
<div class="d-flex">
	<div class="card">
		<div class="card-header text-white bg-primary">Datatable</div>
		<div class="card-body">
			<p>
				<span class="ps-2">Attributes:</span>
				<span class="badge bg-secondary">items</span>
				<span class="badge bg-secondary">paginate</span>
				<span class="badge bg-secondary">perPage</span>
			</p>
			<p>
				<span class="ps-2">Slots:</span>
				<span class="badge bg-success">header</span>
				<span class="badge bg-success">body</span>
				<span class="badge bg-success">footer</span>
			</p>
			<p>
				<span class="ps-2">Events:</span>
				<span class="badge bg-dark">sort</span>
				<span class="badge bg-dark">pageChanged</span>
			</p>
		</div>
	</div>
	<div class="card">
		<div class="card-header text-white bg-primary">Tablehead</div>
		<div class="card-body">
			<p>
				<span class="ps-2">Attributes:</span>
				<span class="badge bg-secondary">sort</span>
			</p>
		</div>
	</div>
</div>

<hr />

<p class="h3">Default Datatable</p>
<Datatable items={users} on:sort={() => sortet1++}>
	<tr slot="header" class="table-primary">
		<Tablehead sort={sortByFirstName}>FirstName</Tablehead>
		<Tablehead sort={sortByLastName}>LastName</Tablehead>
		<Tablehead sort={(a,b) => {return a.age - b.age}}>Age</Tablehead>
		<Tablehead sort={(a,b) => {if(a.adress.street > b.adress.street){return -1} return 1}}>Adress</Tablehead>
		<th>Parents</th>
	</tr>
	<tr slot="body" let:prop={item}>
		<td>{item.firstName}</td>
		<td>{item.lastName}</td>
		<td>{item.age}</td>
		<td>{item.adress.street}</td>
		<td>{item.parents.join(",")}</td>
	</tr>
</Datatable>
<p>sorted: {sortet1}</p>

<div class="highlight">
	<pre class="chroma"><code>{`
<Datatable items={users}>
	<tr slot="header" class="table-primary">
		<Tablehead sort={sortByFirstName}>FirstName</Tablehead>
		<Tablehead sort={sortByLastName}>LastName</Tablehead>
		<Tablehead sort={(a,b) => {return a.age - b.age}}>Age</Tablehead>
		<Tablehead sort={(a,b) => {if(a.adress.street > b.adress.street){return -1} return 1}}>Adress</Tablehead>
		<th>Parents</th>
	</tr>
	<tr slot="body" let:prop={item}>
		<td>{item.firstName}</td>
		<td>{item.lastName}</td>
		<td>{item.age}</td>
		<td>{item.adress.street}</td>
		<td>{item.parents.join(",")}</td>
	</tr>
</Datatable>`}</code></pre>
</div>

<hr />

<p class="h3">Datatable with Pagination (25 items per Page default)</p>
<Datatable items={users} paginate on:sort={() => sortet2++} on:pageChanged={() => pagechanged1++}>
	<tr slot="header" class="table-primary">
		<th><br /></th>
		<Tablehead sort={sortByFirstName}>FirstName</Tablehead>
		<Tablehead sort={sortByLastName}>LastName</Tablehead>
		<Tablehead sort={(a,b) => {return a.age - b.age}}>Age</Tablehead>
		<Tablehead sort={(a,b) => {if(a.adress.street > b.adress.street){return -1} return 1}}>Adress</Tablehead>
		<th>Parents</th>
	</tr>
	<tr slot="body" let:prop={item}>
		<td><button type="button" on:click={() => {}}>C</button></td>
		<td>{item.firstName}</td>
		<td>{item.lastName}</td>
		<td>{item.age}</td>
		<td>{item.adress.street}</td>
		<td>{item.parents.join(",")}</td>
	</tr>
</Datatable>
<p>sortet: {sortet2}</p>
<p>page changed: {pagechanged1}</p>

<div class="highlight">
	<pre class="chroma"><code>{`
<Datatable items={users} paginate>
	<tr slot="header" class="table-primary">
		<th><br /></th>
		<Tablehead sort={sortByFirstName}>FirstName</Tablehead>
		<Tablehead sort={sortByLastName}>LastName</Tablehead>
		<Tablehead sort={(a,b) => {return a.age - b.age}}>Age</Tablehead>
		<Tablehead sort={(a,b) => {if(a.adress.street > b.adress.street){return -1} return 1}}>Adress</Tablehead>
		<th>Parents</th>
	</tr>
	<tr slot="body" let:prop={item}>
		<td><button type="button" on:click={() => {}}>C</button></td>
		<td>{item.firstName}</td>
		<td>{item.lastName}</td>
		<td>{item.age}</td>
		<td>{item.adress.street}</td>
		<td>{item.parents.join(",")}</td>
	</tr>
</Datatable>`}</code></pre>
</div>

<hr />

<p class="h3">Datatable with Pagination and custom nr of items per Page</p>
<Datatable items={users} paginate perPage={5} on:sort={() => sortet3++} on:pageChanged={() => pagechanged2++}>
	<tr slot="header" class="table-primary">
		<th><br /></th>
		<Tablehead sort={sortByFirstName}>FirstName</Tablehead>
		<Tablehead sort={sortByLastName}>LastName</Tablehead>
		<Tablehead sort={(a,b) => {return a.age - b.age}}>Age</Tablehead>
		<Tablehead sort={(a,b) => {if(a.adress.street > b.adress.street){return -1} return 1}}>Adress</Tablehead>
		<th>Parents</th>
	</tr>
	<tr slot="body" let:prop={item}>
		<td><button type="button" on:click={() => {}}>C</button></td>
		<td>{item.firstName}</td>
		<td>{item.lastName}</td>
		<td>{item.age}</td>
		<td>{item.adress.street}</td>
		<td>{item.parents.join(",")}</td>
	</tr>
</Datatable>
<p>sortet: {sortet3}</p>
<p>page changed: {pagechanged2}</p>

<div class="highlight">
	<pre class="chroma"><code>{`
<Datatable items={users} paginate perPage={5}>
	<tr slot="header" class="table-primary">
		<th><br /></th>
		<Tablehead sort={sortByFirstName}>FirstName</Tablehead>
		<Tablehead sort={sortByLastName}>LastName</Tablehead>
		<Tablehead sort={(a,b) => {return a.age - b.age}}>Age</Tablehead>
		<Tablehead sort={(a,b) => {if(a.adress.street > b.adress.street){return -1} return 1}}>Adress</Tablehead>
		<th>Parents</th>
	</tr>
	<tr slot="body" let:prop={item}>
		<td><button type="button" on:click={() => {}}>C</button></td>
		<td>{item.firstName}</td>
		<td>{item.lastName}</td>
		<td>{item.age}</td>
		<td>{item.adress.street}</td>
		<td>{item.parents.join(",")}</td>
	</tr>
</Datatable>`}</code></pre>
</div>