<script lang="ts">
    function logout() {
        localStorage.removeItem("user");
        window.location.reload();
    }
</script>

<div class="flex justify-end p-4">
    <button
        type="button"
        onclick={logout}
        class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700 active:bg-red-800">
        Logout
    </button>
</div>