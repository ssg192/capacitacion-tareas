<script>
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

    let {children} = $props();

    onMount(() => {
        if (localStorage.getItem("user") !== null){
            goto("/home");
        }
    });
</script>
<div class="w-screen h-screen flex col">
    <div class="border border-solid border-green-400"> header</div>
    <div class="grow border border-solid border-blue 500">
    {@render children()}
</div>
    <div class="border border-solid border-red-500">footer</div>
</div>