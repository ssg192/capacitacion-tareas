<script>
	import { goto } from "$app/navigation";

    function login() {
        localStorage.setItem("user","123");
        window.location.reload();
        goto("/home");
    }
</script>

<div>
    <h1>Login</h1>
    <form>
    <input type="text" placeholder="Username"/>
    <input type="password" placeholder="Password"/>
    <button type="submit" onclick={login}>Login</button>
</form>
</div>