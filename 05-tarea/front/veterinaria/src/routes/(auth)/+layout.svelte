<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	let { children } = $props();

	onMount(() => {
		if (localStorage.getItem('user')) {
			goto(resolve('/home'));
		}
	});
</script>

{@render children()}
