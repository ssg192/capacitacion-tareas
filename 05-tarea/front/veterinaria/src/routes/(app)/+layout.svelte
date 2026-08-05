<script lang="ts">

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	let { children } = $props();

	onMount(() => {
		if (localStorage.getItem('user') === null) {
			goto(resolve('/login'));
		}
	});
</script>

{@render children()}
