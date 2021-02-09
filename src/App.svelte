<script>
	import { onMount } from 'svelte';
	import Items from './components/items.svelte';
	import Example from './components/example.svelte';
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
			<div id="api"><strong>{data.api}</strong></div>
			<div class="updated mb">{data.updated}</div>

			{#if data.creator}
				<div class="name mb">
					{data.creator.name}, {data.creator.company}<br />
					{data.creator.email}
				</div>
			{/if}
			{#each data.paths as item}
				<div id={item.type}>
					<h2>{item.type}</h2>
					<div id={item.type + 'Items'}>
						{#each item.items as item}
							<details id={item.id} class="main">
								<summary class="rel main">
									<h3 class="inl path">{item.req}</h3>
									<span class="inl summary">
										{item.summary}
									</span>
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
								<div class="content main">
									<div class="desc mb">{item.desc}</div>
									<div class="upd mb">
										Users:
										{#each item.users as u}
											<span class="user">
												{data.users[u]}
											</span>
										{/each}
										{#if item.updated}
											| Updated: {item.updated}
										{/if}
									</div>
									{#if item.example}
										<Example item={item.example} />
									{/if}
									{#if item.ref}
										<Example item={data.refs[item.ref]} />
									{/if}
									{#if item.params}
										<Items
											data={item.params}
											ref={data.refs}
											title="Parameters"
										/>
									{/if}
									{#if item.responses}
										<Items
											data={item.responses}
											ref={data.refs}
											title="Responses"
										/>
									{/if}
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
		Powered by
		<a href="https://github.com/timoanttila/Svelte-Doksut">Doksut</a>,
		created by <a href="https://github.com/timoanttila">Timo Anttila</a>
	</footer>
</div>

<svelte:head
	><style>
		:root {
			--green: #263927;
			--brown: #362e26;
			--blue: #20a3cb;
			--light: #fcf4ea;
		}
		*:focus {
			outline: none;
		}
		body {
			margin: 0;
			box-sizing: border-box;
			font-weight: 400;
			font-family: Arial, Helvetica, sans-serif;
			line-height: 1.5;
		}
		h1,
		h2,
		h3,
		h4,
		strong {
			font-weight: 700;
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
		summary h3,
		.params h3 {
			font-size: 1.4rem;
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
			top: 0;
			right: 1rem;
		}
		.mb {
			margin-bottom: 1rem;
		}
		sup {
			line-height: 1;
			color: darkred;
		}
		#wrap {
			min-height: 100vh;
			grid-template-rows: 1fr 38.66px;
		}
		main {
			max-width: 1000px;
			width: 90vw;
			margin: 2rem auto;
		}
		details.main {
			padding: 0.5rem 0.5rem 0.7rem;
			border: 2px solid var(--green);
			border-radius: 4px;
		}
		details + details {
			margin-top: 8px;
		}
		summary.main {
			list-style: none;
			padding: 0 1rem;
		}
		summary.main::-webkit-details-marker {
			display: none;
		}
		summary.main:hover .path {
			color: var(--blue);
		}
		summary.main:hover .locked svg {
			fill: var(--blue);
		}
		summary {
			cursor: pointer;
			line-height: 1;
		}
		.path::after {
			content: '►';
			margin-left: 10px;
			margin-top: -2px;
			font-size: 0.8rem;
			display: inline-block;
			vertical-align: middle;
		}
		details[open] .path:after {
			content: '▼';
		}
		summary.main .inl {
			display: inline-block;
			vertical-align: middle;
		}
		summary.main .path {
			margin-right: 1.5rem;
		}
		summary.main .summary {
			margin-top: 4px;
		}
		.content.main {
			margin-top: 0.7rem;
			padding: 1rem;
			border-top: 2px solid var(--green);
		}
		.items {
			margin-top: 0.5rem;
		}
		.item {
			border-top: 1px solid var(--green);
			padding-top: 0.8rem;
			grid-template-columns: 125px 1fr;
		}
		.user + .user:before {
			content: ', ';
		}
		.item + .item {
			margin-top: 0.8rem;
		}
		.params + .params {
			margin-top: 2rem;
		}
		.desc {
			margin-bottom: 15px;
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
		@media screen and (min-width: 750px) {
			summary.main .path {
				margin-bottom: -2px;
			}
		}
		@media screen and (max-width: 750px) {
			summary.main .inl {
				width: 100%;
			}
			summary.main .path {
				margin-bottom: 4px;
			}
		}
	</style></svelte:head
>
