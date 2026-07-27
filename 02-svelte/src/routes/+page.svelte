<script lang="ts">
	import { onMount } from 'svelte';

	interface PokemonListItem {
		name: string;
		url: string;
	}

	interface PokemonDetail {
		name: string;
		sprites: { front_default: string };
		types: { type: { name: string } }[];
	}

	let pokemons: PokemonDetail[] = $state([]);
	let loading = $state(true);

	async function findPokemons(): Promise<PokemonListItem[]> {
		try {
			const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
			if (!response.ok) throw new Error('Error en la petición');
			const data = await response.json();
			return data.results;
		} catch (error) {
			console.error('Error al obtener los pokemons:', error);
			return [];
		}
	}

	async function findPokemon(url: string): Promise<PokemonDetail | null> {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error('Error en la petición');
			return await response.json();
		} catch (error) {
			console.error('Error al obtener el detalle:', error);
			return null;
		}
	}

	async function listPokemons() {
		loading = true;
		const data = await findPokemons();
		const detalles = await Promise.all(data.map((p) => findPokemon(p.url)));
		pokemons = detalles.filter((p): p is PokemonDetail => p !== null);
		loading = false;
	}

	onMount(() => {
		listPokemons();
	});
</script>

<header class="encabezado">
	<h1 class="titulo">Pokédex</h1>
</header>

<div class="contenedor">
	<ul id="pokemons" class="lista">
		{#if loading}
			<p>Cargando...</p>
		{:else}
			{#each pokemons as pokemon}
				<li>
					<img src={pokemon.sprites.front_default} alt={pokemon.name} />
					<p class="nombre">
						<span class="etiqueta">nombre:</span>
						{pokemon.name}
					</p>
					<p class="tipos">
						<span class="etiqueta">tipo:</span>
						{#each pokemon.types as t}
							<span class="tipo {t.type.name}">{t.type.name}</span>
						{/each}
					</p>
				</li>
			{/each}
		{/if}
	</ul>
</div>
