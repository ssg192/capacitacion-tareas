async function findPokemons() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=30');
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error al obtener los pokemons:', error);
      return [];
    }
  }
  
  async function findPokemon(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error en la petición');
      }
      return await response.json();
    } catch (error) {
      console.error('Error al obtener el detalle:', error);
      return null;
    }
  }
  
  function crearTarjeta(pokemon) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;
    img.alt = pokemon.name;
  
    const nombre = document.createElement('p');
    nombre.className = 'nombre';
    const etiquetaNombre = document.createElement('span');
    etiquetaNombre.className = 'etiqueta';
    etiquetaNombre.textContent = 'nombre:';
    nombre.append(etiquetaNombre, ` ${pokemon.name}`);
  
    const tipos = document.createElement('p');
    tipos.className = 'tipos';
    const etiquetaTipo = document.createElement('span');
    etiquetaTipo.className = 'etiqueta';
    etiquetaTipo.textContent = 'tipo:';
    tipos.appendChild(etiquetaTipo);
  
    pokemon.types.forEach((t) => {
      const tipo = document.createElement('span');
      tipo.className = `tipo ${t.type.name}`;
      tipo.textContent = t.type.name;
      tipos.appendChild(tipo);
    });
  
    li.append(img, nombre, tipos);
    return li;
  }
  
  async function listPokemons() {
    const lista = document.getElementById('pokemons');
    const data = await findPokemons();
    const detalles = await Promise.all(data.map((pokemon) => findPokemon(pokemon.url)));
    detalles.filter((pokemon) => pokemon !== null)
      .forEach((pokemon) => lista.appendChild(crearTarjeta(pokemon)));
  }
  listPokemons();