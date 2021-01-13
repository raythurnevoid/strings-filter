<script lang="ts">
	import { filterStrings, classList, styleList } from "../../src";
	import type { StringList } from "../../src/types";

	let checks = [
		{
			label: "One",
			checked: true,
		},
		{
			label: "Two",
			checked: false,
		},
		{
			label: "Three",
			checked: false,
		},
	] as const;

	let strings: StringList;
	$: strings = [
		[checks[0].checked, checks[0].label],
		[checks[1].checked, checks[1].label],
		[checks[2].checked, checks[2].label],
		[checks[0].checked && checks[1].checked && checks[2].checked, "All"],
	];

	let stringsPermanent: StringList;
	$: stringsPermanent = ["Permanent", ...strings];

	$: filtered = filterStrings(strings);
	$: filteredWidthPermanent = filterStrings(stringsPermanent);

	$: classListed = classList(strings);
	$: classListedPermanent = classList(stringsPermanent);

	$: styleListed = styleList(strings);
	$: styleListedPermanent = styleList(stringsPermanent);

	function handleChange() {
		checks = [...checks];
	}
</script>

<style>
	main {
		padding: 1em;
	}

	pre {
		background-color: ghostwhite;
	}

	.row {
		display: flex;
		gap: 1em;
		padding: 0 1em;
		background-color: beige;
	}
</style>

<main>
	{#each checks as check}
		<label>
			<input
				type="checkbox"
				bind:checked={check.checked}
				on:change={handleChange} />{check.label}
		</label>
	{/each}

	stringList()
	<div class="row">
		<div>
			<span>Filtered:</span>
			<pre>
				<code>
					{JSON.stringify(filtered, null, 2)}
				</code>
			</pre>
		</div>

		<div>
			With permanent:
			<pre>
				<code>
					{JSON.stringify(filteredWidthPermanent, null, 2)}
				</code>
			</pre>
		</div>

		<div>
			undefined/null:
			<pre>
				<code>
					{JSON.stringify(filterStrings(null), null, 2)}
				</code>
			</pre>
		</div>

		<div>
			empty array:
			<pre>
				<code>
					{JSON.stringify(filterStrings([]), null, 2)}
				</code>
			</pre>
		</div>
	</div>

	classList()
	<div class="row">
		<div>
			<span>Filtered:</span>
			<pre>
				<code>
					{JSON.stringify(classListed, null, 2)}
				</code>
			</pre>
		</div>

		<div>
			With permanent:
			<pre>
				<code>
					{JSON.stringify(classListedPermanent, null, 2)}
				</code>
			</pre>
		</div>

		<div>
			undefined/null:
			<pre>
				<code>
					{JSON.stringify(classList(null), null, 2)}
				</code>
			</pre>
		</div>

		<div>
			empty array:
			<pre>
				<code>
					{JSON.stringify(classList([]), null, 2)}
				</code>
			</pre>
		</div>
	</div>

	styleList()
	<div class="row">
		<div>
			<span>Filtered:</span>
			<pre>
				<code>
					{JSON.stringify(styleListed, null, 2)}
				</code>
			</pre>
		</div>

		<div>
			With permanent:
			<pre>
				<code>
					{JSON.stringify(styleListedPermanent, null, 2)}
				</code>
			</pre>
		</div>

		<div>
			undefined/null:
			<pre>
				<code>
					{JSON.stringify(styleList(null), null, 2)}
				</code>
			</pre>
		</div>

		<div>
			empty array:
			<pre>
				<code>
					{JSON.stringify(styleList([]), null, 2)}
				</code>
			</pre>
		</div>
	</div>
</main>
