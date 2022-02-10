<script lang="ts">
	import {Pagination} from "$lib/index";
	import { users } from "$model/users";

	let currentPage: number = 0;
	let perPage: number = 5;

	function changePerPage(ev: any){
		let el = (<HTMLInputElement>ev.target);
		perPage = parseInt(el.value);
	}

</script>

<h1>Pagination</h1>
<div class="d-flex">
	<div class="card">
		<div class="card-header text-white bg-primary">Pagination</div>
		<div class="card-body">
			<p>
				<span class="ps-2">Attributes:</span>
				<span class="badge bg-secondary">items</span>
				<span class="badge bg-secondary">perPage</span>
			</p>
			<p>
				<span class="ps-2">Slots:</span>
				<span class="badge bg-success">body</span>
			</p>
			<p>
				<span class="ps-2">Events:</span>
				<span class="badge bg-dark">pageChanged</span>
			</p>
		</div>
	</div>
</div>

<hr />

<p class="h3">Default Pagination</p>
<div class="grid-users">
	<Pagination items={users}>
		<div class="card" slot="body" let:prop={user}>
			<div class="card-header">{user.firstName} {user.lastName}</div>
			<div class="card-body">
				<p>Age: {user.age}</p>
				<p>Gender: {user.gender}</p>
				<p>Adress: {user.adress.street}</p>
			</div>
		</div>
	</Pagination>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<Pagination items={users}>
	<div class="card" slot="body" let:prop={user}>
		<div class="card-header">{user.firstName} {user.lastName}</div>
		<div class="card-body">
			<p>Age: {user.age}</p>
			<p>Gender: {user.gender}</p>
			<p>Adress: {user.adress.street}</p>
		</div>
	</div>
</Pagination>`}</code></pre>
</div>

<hr />

<p class="h3">Pagination with custom nr of items per Page</p>
<div class="grid-users">
	<Pagination items={users} {perPage}>
		<div class="card" slot="body" let:prop={user}>
			<div class="card-header">{user.firstName} {user.lastName}</div>
			<div class="card-body">
				<p>Age: {user.age}</p>
				<p>Gender: {user.gender}</p>
				<p>Adress: {user.adress.street}</p>
			</div>
		</div>
	</Pagination>
</div>
<input type="number" on:change={changePerPage} value={perPage} />

<div class="highlight">
	<pre class="chroma"><code>{`
<Pagination items={users} perPage={5}}>
	<div class="card" slot="body" let:prop={user}>
		<div class="card-header">{user.firstName} {user.lastName}</div>
		<div class="card-body">
			<p>Age: {user.age}</p>
			<p>Gender: {user.gender}</p>
			<p>Adress: {user.adress.street}</p>
		</div>
	</div>
</Pagination>`}</code></pre>
</div>