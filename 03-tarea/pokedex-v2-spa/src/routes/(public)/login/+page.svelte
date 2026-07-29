<script>
	import { goto } from "$app/navigation";

    function login() {
        localStorage.setItem("user","123");
        window.location.reload();
        goto("/home");
    }
</script>

<div class="flex h-screen items-center justify-center bg-slate-900">
    <div class="w-full max-w-sm rounded-2xl bg-slate-800 p-8 shadow-xl">
        <h1 class="mb-6 text-center text-2xl font-bold text-white">Login</h1>

        <form class="flex flex-col gap-4"onsubmit={login}>
            <input
                type="text"
                placeholder="Username"
                class="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"/>
            <input type="password" placeholder="Password"
                class="rounded-lg border border-slate-600 bg-slate-700 px-4 py-2 text-white placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"/>
            <button type="submit"class="mt-2 rounded-lg bg-indigo-600 py-2 font-semibold text-white transition-colors hover:bg-indigo-700 active:bg-indigo-800">
                Login
            </button>
        </form>
    </div>
</div>