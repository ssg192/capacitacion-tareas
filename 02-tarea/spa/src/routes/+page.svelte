<script lang="ts">
  let modoOscuro = $state(false);
  
  function cambiarModo() {
    if (modoOscuro === true) {
      modoOscuro = false;
    } else {
      modoOscuro = true;
    }
  }
  
</script>

<div class="contenedor" class:oscuro={modoOscuro}>
  {#if modoOscuro === true}
    <button class="boton-oscuro" onclick={cambiarModo}>Cambiar a modo claro</button>
  {:else}
    <button class="boton-claro" onclick={cambiarModo}>Cambiar a modo oscuro</button>
  {/if}
</div>

<style>
  .contenedor {
    background-color: white;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 1.5s ease;
  }

  .contenedor.oscuro {
    background-color: black;
  }

  .boton-oscuro {
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid white;
    border-radius: 6px;
    background-color: white;
  }

  .boton-claro {
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 6px;
    background-color: white;
  }
</style>