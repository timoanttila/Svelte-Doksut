<script>
	import { onMount } from 'svelte';
	import Items from './components/items.svelte';
	let data = {};
	onMount(async () => {
		const res = await fetch(`/docs.json`);
		data = await res.json();
	});
</script>

<div id="wrap" class="grid">
	<main class="block">
		{#if data && data.paths}
			<h1>{data.title}</h1>
			<div id="api">{data.api}</div>

			{#each data.paths as item}
				<div id={item.type}>
					<h2>{item.type}</h2>
					<div id={item.type + 'Items'}>
						{#each item.items as item}
							<details id={item.id}>
								<summary class="rel">
									<h3 class="inl path">/{item.req}</h3>
									<span class="inl summary"
										>{item.summary}</span
									>
									{#if item.auth}
										<div class="locked abs">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="22"
												height="22"
												viewBox="0 0 24 24"
											>
												<path
													d="M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z"
												/>
											</svg>
										</div>
									{/if}
								</summary>
								<div class="content">
									<div class="desc mb">{item.desc}</div>
									{#if item.updated}
										<div class="upd mb">
											Updated: {item.updated}
										</div>
									{/if}
									{#if item.example}
										<pre><code>{@html item.example}</code></pre>
									{/if}
									{#if item.ref}
										<pre><code>{@html data.refs[item.ref]}</code></pre>
									{/if}
									<Items
										data={item.params}
										ref={data.refs}
										title="Parameters"
									/>
									<Items
										data={item.responses}
										ref={data.refs}
										title="Responses"
									/>
								</div>
							</details>
						{/each}
					</div>
				</div>
			{/each}
			<div id="security">
				<h2>Security</h2>
				<p>{data.security}</p>
			</div>
		{/if}
	</main>
	<footer>
		Powered by <a href="https://github.com/timoanttila/Svelte-Doksut"
			>Doksut</a
		>, created by <a href="https://github.com/timoanttila">Timo Anttila</a>
	</footer>
</div>

<svelte:head
	><style>
		:root {
			--green: #263927;
			--brown: #362e26;
			--light: #fcf4ea;
		}
		body {
			margin: 0;
			box-sizing: border-box;
			font-weight: 400;
			font-family: Lato, -apple-system, BlinkMacSystemFont, 'Segoe UI',
				Roboto, Helvetica, Arial, sans-serif;
			line-height: 1.5;
		}
		h1 {
			font-size: 1.8rem;
		}
		h1,
		h3,
		h4,
		p {
			margin: 0;
		}
		h2 {
			margin: 1.5rem 0 0.5rem;
		}
		summary h3 {
			font-size: 1.4rem;
		}
		.params h3 {
			font-size: 1.6rem;
		}
		h4 {
			font-size: 1.2rem;
		}
		.grid {
			display: grid;
		}
		.block {
			display: block;
		}
		.rel {
			position: relative;
		}
		.abs {
			position: absolute;
			top: 2px;
			right: 5px;
		}
		.mb {
			margin-bottom: 1rem;
		}
		sup {
			line-height: 1;
			color: darkred;
		}
		main {
			max-width: 1000px;
			width: 90vw;
			margin: 2rem auto;
		}
		details {
			padding: 0.5rem;
			border: 2px solid var(--green);
			border-radius: 4px;
		}
		details + details {
			margin-top: 8px;
		}
		details summary {
			cursor: pointer;
		}
		details summary .inl {
			display: inline-block;
			vertical-align: middle;
			margin-bottom: -2px;
		}
		details summary .path {
			margin-right: 1.5rem;
		}
		details .content {
			margin-top: 0.5rem;
			padding: 1rem;
			border-top: 2px solid var(--green);
		}
		details .items {
			margin-top: 0.5rem;
		}
		details .item {
			border-top: 1px solid var(--green);
			padding-top: 0.8rem;
			grid-template-columns: 175px 1fr;
		}
		details .item + .item {
			margin-top: 0.8rem;
		}
		#security {
			margin-top: 2rem;
		}
		footer {
			background-color: var(--brown);
			padding: 0.5rem 1rem;
			font-size: 14px;
			text-align: center;
		}
		footer,
		footer a {
			color: var(--light);
		}
		footer a {
			text-decoration: none;
		}
		#wrap {
			min-height: 100vh;
			grid-template-rows: 1fr 38.66px;
		}
		.params + .params {
			margin-top: 2rem;
		}
	</style></svelte:head
>
