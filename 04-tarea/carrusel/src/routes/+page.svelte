<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';

	let { data } = $props();

	let current = $state(0);
	let playing = $state(true);
	let intervalId: number;

	function next() {
		current++;
		if (current >= data.apods.length) {
			current = 0;
		}
	}

	function prev() {
		current--;
		if (current < 0) {
			current = data.apods.length - 1;
		}
	}

	function changePage(index: number) {
		current = index;
	}

	function start() {
		clearInterval(intervalId);
		intervalId = setInterval(() => {
			next();
		}, 3000);
	}

	function pause() {
		clearInterval(intervalId);
		playing = false;
	}

	function resume() {
		if (playing) {
			return;
		}
		playing = true;
		start();
	}

	onMount(() => {
		start();
		return () => {
			clearInterval(intervalId);
		};
	});
</script>

<div class="min-h-screen bg-slate-950 text-white flex flex-col items-center px-6 py-12">
	<h1 class="text-2xl font-bold tracking-wide mb-8"> Carrusel </h1>
	<div class="flex items-center gap-5 w-full max-w-2xl">
		<button onclick={prev}
			class="shrink-0 w-11 h-11 rounded-full border border-slate-600 bg-slate-900 flex items-center justify-center hover:bg-blue-500/25 transition">
			<ChevronLeft class="w-5 h-5" />
		</button>
		<div class="flex-1 min-w-0">
			{#each data.apods as apod, i}
				{#if i === current}
					<Card.Root class="overflow-hidden bg-slate-900 border-slate-700 shadow-2xl">
						<Card.Content class="p-0">
							<img src={apod.url} alt={apod.title}
								class="w-full max-h-105 object-cover"/>
						</Card.Content>
						<Card.Footer class="flex-col items-center p-6 gap-1 text-center">
							<Card.Title class="text-white">{apod.title}</Card.Title>
						</Card.Footer>
					</Card.Root>
				{/if}
			{/each}
		</div>
		<button
			onclick={next}
			class="shrink-0 w-11 h-11 rounded-full border border-slate-600/40 bg-slate-900/60 flex items-center justify-center hover:bg-blue-500/25 transition">
			<ChevronRight class="w-5 h-5" />
		</button>
	</div>
	<div class="flex gap-2 mt-6">
	{#each data.apods as apod, i}
		<button
			onclick={() => changePage(i)}
			aria-label={`Ir a la imagen ${i + 1}`}
			class={i === current? 'h-3 w-3 rounded-full bg-white'
				: 'h-3 w-3 rounded-full bg-gray-500'}
		></button>
	{/each}
</div>
	<div class="flex gap-3 mt-6">
		<button onclick={pause}
			class="rounded-md border border-slate-600/40 bg-slate-900/60 px-4 py-2 text-sm hover:bg-slate-800 transition">
			Pausar
		</button>
		<button onclick={resume}
			class="rounded-md border border-slate-600/40 bg-slate-900/60 px-4 py-2 text-sm hover:bg-slate-800 transition">
			Reanudar
		</button>
	</div>
</div>