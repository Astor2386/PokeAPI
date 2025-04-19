async function fetchPokemonData(pokemonName) {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonName);
    if (!response.ok) {
        throw new Error('Pokémon not found!');
    }
    const pokemonData = await response.json();
    return pokemonData;
}

function displayPokemon() {
    const pokemonInput = document.getElementById('pokemonInput').value;
    const pokemonInfoElement = document.getElementById('pokemonInfo');

    // Clear previous results
    pokemonInfoElement.innerHTML = '';

    // Check for empty input
    if (!pokemonInput) {
        pokemonInfoElement.innerHTML = '<p style="color: red;">Please enter a Pokémon name or ID!</p>';
        return;
    }

    // Fetch and display Pokémon data
    fetchPokemonData(pokemonInput).then(pokemonData => {
        // Extract data
        const name = pokemonData.name;
        const image = pokemonData.sprites.front_default;
        const types = pokemonData.types.map(type => type.type.name).join(', ');

        // Display data using innerHTML
        pokemonInfoElement.innerHTML = `
            <h2>${name}</h2>
            <img src="${image}" alt="${name}">
            <h3>Type: ${types}</h3>
        `;
    }).catch(error => {
        // Handle errors
        pokemonInfoElement.innerHTML = '<p style="color: red;">Pokémon not found!</p>';
    });
}

// Add event listener to the search button
document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', displayPokemon);
});