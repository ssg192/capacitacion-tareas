<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<h1>Rick and Morty personajes</h1>

<div class="grid">
	{#each data.characters as character (character.id)}
		<div class="card">
			<img src={character.image} alt={character.name} />

			<div class="content">
				<h2>{character.name}</h2>

				<p>Especie: {character.species}</p>
				<p>Tipo: {character.type || 'Desconocido'}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		color: #22c55e;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 20px;
		padding: 20px;
	}

	.card {
		background: #1f2937;
		color: white;
		border-radius: 12px;
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0,0,0,.2);
	}

	img {
		width: 100%;
		display: block;
	}

	.content {
		padding: 15px;
	}

	h2 {
		margin: 0 0 10px;
	}
</style>