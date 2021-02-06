<script>
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
						<div class="desc">
							{item.desc}
						</div>
						{#if item.example}
							<pre><code>{@html item.example}</code></pre>
						{/if}
						{#if item.ref}
							<pre><code>{@html ref[item.ref]}</code></pre>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
{/if}
