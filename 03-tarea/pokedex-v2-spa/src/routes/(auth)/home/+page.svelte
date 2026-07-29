<script lang="ts">

function logout(){
    localStorage.removeItem("user")
    window.location.reload();
}
</script>


<div>
    <button type= "button" onclick={logout}>
        logout
    </button>
</div>