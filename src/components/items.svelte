<script>
	import Example from './example.svelte';
	export let data;
	export let title;
	export let ref;
</script>

{#if data}
	<div class="params">
		<h3>{title}</h3>
		<div class="items">
			{#each data as item}
				<div class="item grid">
					<div class="left label">
						<h4>
							{item.name}
							{#if item.req}
								<sup>*</sup>
							{/if}
						</h4>
						{#if item.type}
							<div class="type">
								{item.type}
							</div>
						{/if}
						{#if item.in}
							<div class="in">
								{item.in}
							</div>
						{/if}
					</div>
					<div class="right value">
						{#if item.desc}
							<div class="desc">
								{item.desc}
							</div>
						{/if}
						{#if item.example}
							<Example item={item.example} />
						{/if}
						{#if item.ref}
							<Example item={ref[item.ref]} />
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
