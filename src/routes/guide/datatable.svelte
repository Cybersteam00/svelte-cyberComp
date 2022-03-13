<script lang="ts" context="module">
	export const prerender = true;
</script>

<script lang="ts">
	import {users} from "$model/users"
	import {DataTable, TableHead} from "$lib/index";
	import User, { Gender } from "$model/User";
	import PaginationContr from "$component/PaginationContr.svelte";
	import PaginationContrCls from "$component/PaginationContrCls.svelte";
	import { onMount } from "svelte";
	import PaginationControl from "$lib/pagination/PaginationControl.svelte";

	let perPage: number = 1;
	let perPage2: number = 4;

	let currentPage: number = 1;
	let currentPage2: number = 1;

	let users2: User[] = [];
	let maxitems: number = 0;

	let promise: Promise<any> = undefined;
	let selectedUser: User = new User();
	let selectedUser2: User = new User();
	let selectedUser3: User = new User();
	let selectedUser4: User = new User();
	let selectedUser5: User = new User();
	let filterFirstName: string = "";
	let filterFirstName2: string = "";
	let filterFirstName3: string = "";
	let filterGender: Gender = null;
	let filterGender2: Gender = null;
	let filterGender3: Gender = null;
	let sortBy: string = "";
	let sortReversed: boolean = false;
	$: users3 = users.filter((user) => {
			if(!user.firstName.startsWith(filterFirstName)){
				return false;
			}

			if(filterGender != null && user.gender != filterGender){
				return false
			}

			return true;
		
	});
	$: users4 = users.filter((user) => {
			if(!user.firstName.startsWith(filterFirstName2)){
				return false;
			}

			if(filterGender2 != null && user.gender != filterGender2){
				return false
			}

			return true;
		
	});
	$: users5 = users.filter((user) => {
			if(!user.firstName.startsWith(filterFirstName3)){
				return false;
			}

			if(filterGender3 != null && user.gender != filterGender3){
				return false
			}

			return true;
		
	});

	function sortByFirstName(a: User, b:User){
		if(a.firstName < b.firstName){return -1}
		else if(a.firstName > b.firstName){return 1}
		else{
			if(a.lastName < b.lastName){return -1}
			else if(a.lastName > b.lastName){return 1}
		}
		return 0
	}

	function sortByFirstName2(a: User, b:User){
		if(a.firstName < b.firstName){return -1}
		else if(a.firstName > b.firstName){return 1}
		return 0
	}

	function sortByFirstNameAsc(a: User, b:User){
		if(a.firstName < b.firstName){return -1}
		else {return 1}
	}

	function sortByLastName(a: User, b:User){
		if(a.lastName < b.lastName){return -1}
		else if(a.lastName > b.lastName){return 1}
		else{
			if(a.firstName < b.firstName){return -1}
			else if(a.firstName > b.firstName){return 1}
		}
		return 0
	}

	function sortByLastName2(a: User, b:User){
		if(a.lastName < b.lastName){return -1}
		else if(a.lastName > b.lastName){return 1}
		return 0
	}

	function sortByLastNameAsc(a: User, b:User){
		if(a.lastName < b.lastName){return -1}
		else {return 1}
	}

	onMount(() => {
		loadUsers(1, perPage2, sortBy, sortReversed);
	})

	function filterUsers(user: User){
			if(!user.firstName.startsWith(filterFirstName)){
				return false;
			}

			if(filterGender != null && user.gender != filterGender){
				return false
			}

			return true;
		
	}

	function loadUsers(tPageIndex: number, tPerPage: number, sortBy1: string, sortReversed1: boolean) {
		promise = new Promise((resolve, reject) => {
			window.setTimeout(async () => {
				var tmp = users.filter(u => true);

				tmp = users.sort((a, b) => {
					return a[sortBy1] < b[sortBy1] ? -1 : 1;
				});

				if(sortReversed1){
					tmp = tmp.reverse();
				}

				users2 = tmp.slice((tPageIndex-1) * tPerPage, tPageIndex * tPerPage);
				maxitems = tmp.length;

				resolve(users2);
			}, 1000);
		});
	}
</script>

<svelte:head>
	<title>Svelte Cyber Comp - DataTable</title>
</svelte:head>

<h1>DataTable</h1>
<div class="row">
	<div class="col-12 col-xxl-6">
		<p class="h5">Components</p>
		<div class="row">
			<div class="col-12 col-md-4">
				<div class="card">
					<div class="card-header text-white bg-primary">DataTable</div>
					<div class="card-body">
						<p>
							<span class="pe-2">Attributes:</span>
							<span class="badge bg-secondary">items</span>
							<span class="badge bg-secondary">paginate</span>
							<span class="badge bg-secondary">perPage</span>
							<span class="badge bg-secondary">lookupPages</span>
						</p>
						<p>
							<span class="pe-2">Slots:</span>
							<span class="badge bg-success">header</span>
							<span class="badge bg-success">body</span>
							<span class="badge bg-success">footer</span>
						</p>
						<p>
							<span class="pe-2">Events:</span>
							<span class="badge bg-dark">sort</span>
							<span class="badge bg-dark">pageChanged</span>
						</p>
						<p>
							<span class="pe-2">$$props: class</span>
						</p>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div class="card">
					<div class="card-header text-white bg-primary">TableHead</div>
					<div class="card-body">
						<p>
							<span class="pe-2">Attributes:</span>
							<span class="badge bg-secondary">sort</span>
							<span class="badge bg-secondary">sortReversed</span>
							<span class="badge bg-secondary">active</span>
							<span class="badge bg-secondary">sortBy</span>
						</p>
						<p>
							<span class="pe-2">$$props: class</span>
						</p>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<PaginationContr></PaginationContr>
			</div>
		</div>
	</div>
	<div class="col-12 col-xxl-6">
		<p class="h5">Internal css classes</p>
		<div class="row">
			<div class="col-12 col-md-6">
				<div class="card">
					<div class="card-header text-white bg-primary">TableHead</div>
					<div class="card-body">
						<p>fa-arrow-up, fa-arrow-down</p>
					</div>
				</div>
			</div>
			<div class="col-12 col-md-6">
				<PaginationContrCls></PaginationContrCls>
			</div>
		</div>
	</div>
</div>

<hr />

<p class="h3">Default DataTable</p>
<p>The default DataTable displays all items. To add content to thead, tbody or tfoot, use the appropiate slot names. Adding <code>TableHead</code> provides the ability to sort the table by one or multiple columns. A <a href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">Sort-Function</a> is needed.</p>
<p>You can freely design your table-row, that will be used for each item in you array: <code>{`<tr slot="body" let:prop={item}>...</tr>`}</code>. This also provides autocompletion for a better workflow.</p>
<div class="table-responsive">
	<DataTable items={users.filter(u => true)} class="table table-bordered">
		<tr slot="header" class="table-primary">
			<TableHead sort={sortByFirstName}>FirstName</TableHead>
			<TableHead sort={sortByLastName}>LastName</TableHead>
			<TableHead sort={(a,b) => {return a.age - b.age}}>Age</TableHead>
			<TableHead sort={(a,b) => {if(a.adress.street < b.adress.street){return -1} return 1}}>Adress</TableHead>
			<th>Parents</th>
		</tr>
		<tr slot="body" let:prop={item}>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.age}</td>
			<td>{item.adress.street}</td>
			<td>{item.parents.join(",")}</td>
		</tr>
	</DataTable>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={users}>
	<tr slot="header">
		<TableHead sort={sortByFirstName}>FirstName</TableHead>
		<TableHead sort={sortByLastName}>LastName</TableHead>
		<TableHead sort={(a,b) => {return a.age - b.age}}>Age</TableHead>
		<TableHead sort={(a,b) => {if(a.adress.street < b.adress.street){return -1} return 1}}>Adress</TableHead>
		<th>Parents</th>
	</tr>
	<tr slot="body" let:prop={item}>
		<td>{item.firstName}</td>
		<td>{item.lastName}</td>
		<td>{item.age}</td>
		<td>{item.adress.street}</td>
		<td>{item.parents.join(",")}</td>
	</tr>
</DataTable>`}</code></pre>
</div>
<br/>

<p>It's also possible to have a consistend sortorder on sub-columns, like an always asc firstname when you sort by lastname. Use <code>additionalSorts</code> to add as many additional sort-functions as needed.</p>
<div class="table-responsive">
	<DataTable items={users} class="table table-bordered">
		<tr slot="header" class="table-primary">
			<TableHead sort={sortByFirstName2} additionalSorts={[sortByLastNameAsc]} class="align-top">
				<span>FirstName</span>
			</TableHead>
			<TableHead sort={sortByLastName2} additionalSorts={[sortByFirstNameAsc]} class="align-top">LastName</TableHead>
			<TableHead sort={(a,b) => {return a.gender == Gender.MALE ? 1 : -1}} class="align-top">
				<span>Gender</span>
			</TableHead>
		</tr>
		<tr slot="body" let:prop={item}>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.gender == Gender.MALE ? "male" : "female"}</td>
		</tr>
	</DataTable>
</div>
<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={users}>
	<tr slot="header">
		<TableHead sort={sortByFirstName} additionalSorts={[lastNameAsc]}>FirstName</TableHead>
		<TableHead sort={sortByLastName} additionalSorts={[firstNameAsc]}>LastName</TableHead>
		...
	</tr>
	<tr slot="body" let:prop={item}>
		<td>{item.firstName}</td>
		<td>{item.lastName}</td>
		...
	</tr>
</DataTable>`}</code></pre>
</div>
<br>

<p>Additional Funcionality for each row can be created, like a checkbox or a btn to select the current item.</p>
<div class="table-responsive">
	<DataTable items={users.filter(u => true)} class="table table-bordered">
		<tr slot="header" class="table-primary">
			<th><br/></th>
			<TableHead sort={sortByFirstName}>FirstName</TableHead>
			<TableHead sort={sortByLastName}>LastName</TableHead>
			<TableHead sort={(a,b) => {return a.age - b.age}}>Age</TableHead>
			<TableHead sort={(a,b) => {if(a.adress.street < b.adress.street){return -1} return 1}}>Adress</TableHead>
			<th>Parents</th>
		</tr>
		<tr slot="body" let:prop={item}>
			<td><button type="button" class="btn btn-dark" on:click={() => {selectedUser = item}}>select</button></td>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.age}</td>
			<td>{item.adress.street}</td>
			<td>{item.parents.join(",")}</td>
		</tr>
		<tr slot="footer">
			<td colspan="6">
				<p>Selected Item: {selectedUser.firstName} {selectedUser.lastName}</p>
			</td>
		</tr>
	</DataTable>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={users}>
	<tr slot="header">
		<th><br/></th>
		...
	</tr>
	<tr slot="body" let:prop={item}>
		<td>
			<button on:click={selectItem(item)}>Select</button>
		</td>
		...
	</tr>
</DataTable>`}</code></pre>
</div>
<br/>
<p>You can also preselect the header to display a sorted table on initialisation.</p>
<div class="table-responsive">
	<DataTable items={users.filter(u => true)} class="table table-bordered">
		<tr slot="header" class="table-primary">
			<th><br/></th>
			<TableHead sort={sortByFirstName} active>FirstName</TableHead>
			<TableHead sort={sortByLastName}>LastName</TableHead>
			<TableHead sort={(a,b) => {return a.age - b.age}}>Age</TableHead>
			<TableHead sort={(a,b) => {if(a.adress.street < b.adress.street){return -1} return 1}}>Adress</TableHead>
			<th>Parents</th>
		</tr>
		<tr slot="body" let:prop={item}>
			<td><button type="button" class="btn btn-dark" on:click={() => {selectedUser2 = item}}>select</button></td>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.age}</td>
			<td>{item.adress.street}</td>
			<td>{item.parents.join(",")}</td>
		</tr>
		<tr slot="footer">
			<td colspan="6">
				<p>Selected Item: {selectedUser2.firstName} {selectedUser2.lastName}</p>
			</td>
		</tr>
	</DataTable>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={users}>
	<tr slot="header">
		<TableHead sort={...} active>FirstName</TableHead>
		...
	</tr>
	<tr slot="body" let:prop={item}>
		...
	</tr>
</DataTable>`}</code></pre>
</div>

<hr />

<p class="h3">Pagination</p>
<p>To display the pagination-Control, add <code>paginate</code> to <code>DataTable</code>. The default number of displayed items per page is 25.</p>
<div class="table-responsive">
	<DataTable items={users.filter(u => true)} paginate class="table table-bordered">
		<tr slot="header" class="table-primary">
			<TableHead sort={sortByFirstName}>FirstName</TableHead>
			<TableHead sort={sortByLastName}>LastName</TableHead>
			<TableHead sort={(a,b) => {return a.age - b.age}}>Age</TableHead>
			<TableHead sort={(a,b) => {if(a.adress.street < b.adress.street){return -1} return 1}}>Adress</TableHead>
			<th>Parents</th>
		</tr>
		<tr slot="body" let:prop={item}>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.age}</td>
			<td>{item.adress.street}</td>
			<td>{item.parents.join(",")}</td>
		</tr>
	</DataTable>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={users} paginate>
	...
</DataTable>`}</code></pre>
</div>

<hr />

<p>It's also possible to define the nr of items displayed for each page.</p>
<div class="table-responsive">
	<DataTable items={users.filter(u => true)} paginate perPage={5} class="table table-bordered">
		<tr slot="header" class="table-primary">
			<TableHead sort={sortByFirstName}>FirstName</TableHead>
			<TableHead sort={sortByLastName}>LastName</TableHead>
			<TableHead sort={(a,b) => {return a.age - b.age}}>Age</TableHead>
			<TableHead sort={(a,b) => {if(a.adress.street < b.adress.street){return -1} return 1}}>Adress</TableHead>
			<th>Parents</th>
		</tr>
		<tr slot="body" let:prop={item}>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.age}</td>
			<td>{item.adress.street}</td>
			<td>{item.parents.join(",")}</td>
		</tr>
	</DataTable>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={users} paginate perPage={5}>
	...
</DataTable>`}</code></pre>
</div>

<hr />

<p>You can also add your custom Page Control items, like 'items per page' and 'jump to page'.</p>
<div class="table-responsive">
	<DataTable items={users.filter(u => true)} paginate {perPage} bind:currentPage={currentPage2} class="table table-bordered">
		<tr slot="header" class="table-primary">
			<TableHead sort={sortByFirstName}>FirstName</TableHead>
			<TableHead sort={sortByLastName}>LastName</TableHead>
			<TableHead sort={(a,b) => {return a.age - b.age}}>Age</TableHead>
			<TableHead sort={(a,b) => {if(a.adress.street < b.adress.street){return -1} return 1}}>Adress</TableHead>
			<th>Parents</th>
		</tr>
		<tr slot="body" let:prop={item}>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.age}</td>
			<td>{item.adress.street}</td>
			<td>{item.parents.join(",")}</td>
		</tr>
		<div slot="pageControl">
			Items per page: <input type="number" bind:value={perPage} />
			Current page: <input type="number" bind:value={currentPage2} />
		</div>
	</DataTable>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={users} paginate {perPage} {currentPage}>
	<tr slot="header">
		...
	</tr>
	<tr slot="body" let:prop={item}>
		...
	</tr>
	<div slot="pageControl">
		Items per page: <input type="number" bind:value={perPage} />
		Current page: <input type="number" bind:value={currentPage} />
	</div>
</DataTable>`}</code></pre>
</div>

<hr />

<p>Use compact pagination</p>
<div class="table-responsive">
	<DataTable items={users.filter(u => true)} paginate perPage={1} lookupPages={1} class="table table-bordered">
		<tr slot="header" class="table-primary">
			<TableHead sort={sortByFirstName}>FirstName</TableHead>
			<TableHead sort={sortByLastName}>LastName</TableHead>
			<TableHead sort={(a,b) => {return a.age - b.age}}>Age</TableHead>
			<TableHead sort={(a,b) => {if(a.adress.street < b.adress.street){return -1} return 1}}>Adress</TableHead>
			<th>Parents</th>
		</tr>
		<tr slot="body" let:prop={item}>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.age}</td>
			<td>{item.adress.street}</td>
			<td>{item.parents.join(",")}</td>
		</tr>
	</DataTable>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={users} paginate perPage={1} lookupPages={1}>
	...
</DataTable>`}</code></pre>
</div>

<hr />

<p class="h3">Filter</p>
<p>To filter your items, add the <a href="https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter-function</a> to your array. The neccessary input-elements must be added in <code>TableHead</code> using <code>slot="filter"</code>. This provides a wide variaty of possibilities to filter your table, using text-input, radio-input, checkbox and select.</p>
<div class="table-responsive">
	<DataTable items={users3} class="table table-bordered ">
		<tr slot="header" class="table-primary">
			<th><br/></th>
			<TableHead sort={sortByFirstName} class="align-top">
				<span>FirstName</span>
				<div slot="filter">
					<input type="text" bind:value={filterFirstName}>
				</div>
			</TableHead>
			<TableHead sort={sortByLastName} class="align-top">LastName</TableHead>
			<TableHead sort={(a,b) => {return a.age - b.age}} class="align-top">Age</TableHead>
			<TableHead sort={(a,b) => {return a.gender == Gender.MALE ? 1 : -1}} class="align-top">
				<span>Gender</span>
				<div slot="filter" class="d-flex">
					<label class="input-radio pe-2">
						<input type="radio" name="gender" bind:group={filterGender} value={null} />All
					</label>
					<label class="input-radio pe-2">
						<input type="radio" name="gender" bind:group={filterGender} value={Gender.MALE} />male
					</label>
					<label class="input-radio">
						<input type="radio" name="gender" bind:group={filterGender} value={Gender.FEMALE} />female
					</label>
				</div>
			</TableHead>
			<TableHead sort={(a,b) => {if(a.adress.street < b.adress.street){return -1} return 1}} class="align-top">Adress</TableHead>
			<th class="align-top">Parents</th>
		</tr>
		<tr slot="body" let:prop={item}>
			<td><button type="button" class="btn btn-dark" on:click={() => {selectedUser3 = item}}>select</button></td>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.age}</td>
			<td>{item.gender == Gender.MALE ? "male" : "female"}</td>
			<td>{item.adress.street}</td>
			<td>{item.parents.join(",")}</td>
		</tr>
		<tr slot="footer">
			<td colspan="7">
				<p>Selected Item: {selectedUser3.firstName} {selectedUser3.lastName}</p>
			</td>
		</tr>
	</DataTable>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={filteredUsers}>
	<tr slot="header">
		<th><br/></th>
		<TableHead sort={sortByLastName}>
			LastName
			<div slot="filter">
				<input type="text" bind:value={filterFirstName} on:input={customFilterFunction} />
			</div>
		</TableHead>
		...
	</tr>
	<tr slot="body" let:prop={item}>
		...
	</tr>
</DataTable>`}</code></pre>
</div>
<br>

<p>Using Filter with Pagination</p>
<div class="container-fluid">
	<div class="row">
		<div class="col-12 col-lg-6">
			<b>Regular</b>
			<div class="table-responsive">
				<DataTable items={users4} paginate perPage={1} class="table table-bordered">
					<tr slot="header" class="table-primary">
						<th><br/></th>
						<TableHead sort={sortByFirstName} class="align-top">
							<span>FirstName</span>
							<div slot="filter">
								<input type="text" bind:value={filterFirstName2}>
							</div>
						</TableHead>
						<TableHead sort={sortByLastName} class="align-top">LastName</TableHead>
						<TableHead sort={(a,b) => {return a.gender == Gender.MALE ? 1 : -1}} class="align-top">
							<span>Gender</span>
							<div slot="filter" class="d-flex">
								<label class="input-radio  pe-2">
									<input type="radio" name="gender2" bind:group={filterGender2} value={null} />All
								</label>
								<label class="input-radio  pe-2">
									<input type="radio" name="gender2" bind:group={filterGender2} value={Gender.MALE} />male
								</label>
								<label class="input-radio">
									<input type="radio" name="gender2" bind:group={filterGender2} value={Gender.FEMALE} />female
								</label>
							</div>
						</TableHead>
					</tr>
					<tr slot="body" let:prop={item}>
						<td><button type="button" class="btn btn-dark" on:click={() => {selectedUser4 = item}}>select</button></td>
						<td>{item.firstName}</td>
						<td>{item.lastName}</td>
						<td>{item.gender == Gender.MALE ? "male" : "female"}</td>
					</tr>
					<tr slot="footer">
						<td colspan="4">
							<p>Selected Item: {selectedUser4.firstName} {selectedUser4.lastName}</p>
						</td>
					</tr>
				</DataTable>
			</div>
		</div>
		<div class="col-12 col-lg-6">
			<b>Compact</b>
			<div class="table-responsive">
				<DataTable items={users5} paginate perPage={1} lookupPages={1} class="table table-bordered">
					<tr slot="header" class="table-primary">
						<th><br/></th>
						<TableHead sort={sortByFirstName2} additionalSorts={[sortByLastNameAsc]} class="align-top">
							<span>FirstName</span>
							<div slot="filter">
								<input type="text" bind:value={filterFirstName3}>
							</div>
						</TableHead>
						<TableHead sort={sortByLastName2} additionalSorts={[sortByFirstNameAsc]} class="align-top">LastName</TableHead>
						<TableHead sort={(a,b) => {return a.gender == Gender.MALE ? 1 : -1}} class="align-top">
							<span>Gender</span>
							<div slot="filter" class="d-flex">
								<label class="input-radio  pe-2">
									<input type="radio" name="gender3" bind:group={filterGender3} value={null} />All
								</label>
								<label class="input-radio  pe-2">
									<input type="radio" name="gender3" bind:group={filterGender3} value={Gender.MALE} />male
								</label>
								<label class="input-radio">
									<input type="radio" name="gender3" bind:group={filterGender3} value={Gender.FEMALE} />female
								</label>
							</div>
						</TableHead>
					</tr>
					<tr slot="body" let:prop={item}>
						<td><button type="button" class="btn btn-dark" on:click={() => {selectedUser5 = item}}>select</button></td>
						<td>{item.firstName}</td>
						<td>{item.lastName}</td>
						<td>{item.gender == Gender.MALE ? "male" : "female"}</td>
					</tr>
					<tr slot="footer">
						<td colspan="4">
							<p>Selected Item: {selectedUser5.firstName} {selectedUser5.lastName}</p>
						</td>
					</tr>
				</DataTable>
			</div>
		</div>
	</div>
</div>

<hr />

<p class="h3">Items from http Response</p>
<p>If you can't load all items at once to keep your webapp userfriendly, you can load them by http instead and display them once the response has been completed. This type of usecase is a bit more complicated and takes a small amount of work to include. Your response also needs the maximum nr of items based on the criteria send to the url.</p>
<p>First, don't add <code>paginate</code> and include <code>PaginationControl</code> manualy to display the possible number of pages you can get. This also allows you to place it on top of the table. Next use the Events <code>on:sort</code> and <code>on:pageChanged</code> to send a http request and get a updated list of items to display in your DataTable.</p>
<div class="table-responsive">
	<DataTable items={users2} perPage={perPage2} class="table table-bordered" on:sort={(ev) => {loadUsers(currentPage, perPage2, ev.detail.sortBy, ev.detail.sortReversed)}}>
		<tr slot="header" class="table-primary">
			<TableHead sort={undefined} sortBy="firstName">FirstName</TableHead>
			<TableHead sort={undefined} sortBy="lastName">LastName</TableHead>
			<th>Age</th>
			<th>Adress</th>
			<th>Parents</th>
		</tr>
		<tr slot="body" let:prop={item}>
			<td>{item.firstName}</td>
			<td>{item.lastName}</td>
			<td>{item.age}</td>
			<td>{item.adress.street}</td>
			<td>{item.parents.join(",")}</td>
		</tr>
		<tr slot="footer">
			{#await promise}
				<i class="fas fa-spinner fa-spin" />
			{:catch err}
				<p class="alert alert-danger">An error occured</p>
			{/await}
		</tr>
	</DataTable>
	<PaginationControl numberItems={maxitems} perPage={perPage2} bind:currentPage on:pageChanged={(ev) => {loadUsers(currentPage, perPage2, sortBy, sortReversed)}}></PaginationControl>
</div>

<div class="highlight">
	<pre class="chroma"><code>{`
<DataTable items={users} on:sort={loadUsers}>
	<tr slot="header" class="table-primary">
		<TableHead sort={undefined} sortKey="firstName">FirstName</TableHead>
		<TableHead sort={undefined} sortKey="lastName">LastName</TableHead>
		<TableHead sort={undefined} sortKey="age">Age</TableHead>
		<TableHead sort={undefined} sortKey="adress">Adress</TableHead>
		<th>Parents</th>
	</tr>
	<tr slot="body" let:prop={item}>
		...
	</tr>
	<tr slot="footer">
		{#await promise}
			<i class="fas fa-spinner fa-spin" />
		{:catch err}
			<p class="alert alert-danger">An error occured</p>
		{/await}
	</tr>
</DataTable>
<PaginationControl numberItems={maxitems} {perPage} bind:currentPage on:pageChanged={loadUsers}></PaginationControl>`}</code></pre>
</div>

<hr />

<p class="h2">CSS</p>
<p>Anything below shows things possible with CSS. A seperate CSS-file is required.</p>
<div class="row">
	<div class="col-12 col-lg-6 no-first-and-last-btn">
		<p class="h3">Dont show 'First' and 'Last' btn</p>
		<DataTable items={users} paginate perPage={3} class="table table-bordered">
			<tr slot="header" class="table-primary">
				<TableHead sort={sortByFirstName}>FirstName</TableHead>
				<TableHead sort={sortByLastName}>LastName</TableHead>
			</tr>
			<tr slot="body" let:prop={item}>
				<td>{item.firstName}</td>
				<td>{item.lastName}</td>
			</tr>
		</DataTable>
	</div>
	<div class="col-12 col-lg-6">
		<p class="h3">PageControl at top</p>
		<div class="dataTable-pageControl-top">
			<DataTable items={users} paginate perPage={3} class="table table-bordered">
				<tr slot="header" class="table-primary">
					<TableHead sort={sortByFirstName}>FirstName</TableHead>
					<TableHead sort={sortByLastName}>LastName</TableHead>
				</tr>
				<tr slot="body" let:prop={item}>
					<td>{item.firstName}</td>
					<td>{item.lastName}</td>
				</tr>
			</DataTable>
		</div>
	</div>
	<div class="col-12 col-lg-6">
		<p class="h3">Swap icons</p>
		<div class="swapPaginationIcons">
			<DataTable items={users} paginate perPage={3} class="table table-bordered">
				<tr slot="header" class="table-primary">
					<TableHead sort={sortByFirstName}>FirstName</TableHead>
					<TableHead sort={sortByLastName}>LastName</TableHead>
				</tr>
				<tr slot="body" let:prop={item}>
					<td>{item.firstName}</td>
					<td>{item.lastName}</td>
				</tr>
			</DataTable>
		</div>
	</div>
	<div class="col-12 col-lg-6">
		<p class="h3">Compact sort-icons</p>
		<div class="compactSortIcons">
			<DataTable items={users} paginate perPage={3} class="table table-bordered">
				<tr slot="header" class="table-primary">
					<TableHead sort={sortByFirstName}>FirstName</TableHead>
					<TableHead sort={sortByLastName}>LastName</TableHead>
				</tr>
				<tr slot="body" let:prop={item}>
					<td>{item.firstName}</td>
					<td>{item.lastName}</td>
				</tr>
			</DataTable>
		</div>
	</div>
</div>