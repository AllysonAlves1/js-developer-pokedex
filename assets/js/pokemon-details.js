const pokemonDetailsContainer = document.getElementById('pokemonDetails');

function displayPokemonDetails(pokemon) {
    const html = `
        <div class="pokemon ${pokemon.types[0].type.name}">
            <a href="index.html"><img src="/assets/img/left-arrow-svgrepo-com.svg" alt="Descrição da Imagem">
            </a>
            <div class="titulo">
                <h1 class="name">${pokemon.name}</h1>
                <p class="number">#${pokemon.order}</p>
            </div>
            <div class="types">
            ${pokemon.types.map((typeSlot) => `<p class="type ${typeSlot.type.name}">${typeSlot.type.name}</p>`).join('')}
            </div>
            <div class="img-container">
            <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
            </div>
        </div>
        <div class="about">
            <p><span class="about-name">About</span></p>
            <div class="description">
                <p class="name">Experience: </p> 
                <p class="description-value">${pokemon.base_experience}</p>
            </div>
            <div class="description">
                <p class="name">Height: </p> 
                <p class="description-value">${pokemon.height}</p>
            </div>
            <div class="description">
                <p class="name">Weight: </p> 
                <p class="description-value">${pokemon.weight}</p>
            </div>
            <div class="description">
                <p class="name">Abilities: </p> 
                <p class="description-value">${pokemon.abilities.map((abilitySlot) => abilitySlot.ability.name)}</p>
            </div>
            <p><span class="about-name">Base Stats</span></p>
            <ul>
                ${pokemon.stats.map((stat) => `<li class="stats-list">${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
            </ul>
        </div>
    `;

    pokemonDetailsContainer.innerHTML = html;
}

const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('number');

if (pokemonId) {
    pokeApi.getPokemonDetailById(pokemonId).then((pokemon) => {
        displayPokemonDetails(pokemon);
        console.log(pokemon);
    });
}
