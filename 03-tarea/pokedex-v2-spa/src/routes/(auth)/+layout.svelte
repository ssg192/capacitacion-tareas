<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	let { children } = $props();

	onMount(() => {
		if (localStorage.getItem("user") === null) {
			goto("/login");
		}
	});
</script>

{@render children()}