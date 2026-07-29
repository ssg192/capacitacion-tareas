<script>
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";

    let { children } = $props();

    onMount(() => {
        if (localStorage.getItem("user") !== null) {
            goto("/home");
        }
    });
</script>

<div class="flex h-screen w-screen flex-col bg-slate-100">
    <header class="flex items-center justify-between border-b border-green-400 bg-white px-6 py-4 shadow-sm">
        <span class="text-lg font-semibold text-slate-800">Header</span>
    </header>

    <main class="grow overflow-y-auto border border-blue-500 bg-slate-50 p-6">
        {@render children()}
    </main>

    <footer class="border-t border-red-500 bg-white px-6 py-4 text-center text-sm text-slate-500">
        footer
    </footer>
</div>