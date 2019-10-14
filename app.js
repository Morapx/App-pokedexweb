//const mainContainer = document.getElementById('main-container');
//const pokemonSprite = document.getElementById('pokemon-sprite');

const pokemonHTML = {
    name : document.getElementById('pokemon-name'),
    sprite : document.getElementById('pokemon-sprite'),
    abilities : document.getElementById('pokemon-abilities')
}


const apiUrl = 'https://pokeapi.co/api/v2/';

let getPokemonAbilityData = async url =>{
    const response = await fetch(url);
    const abilityData = await response.json();
    //console.log(abilityData);
    return abilityData;
};

let getPokemonData = async ()=>{
    const response = await fetch(`${apiUrl}pokemon/1`);
    const pokemonData = await response.json();
    const {name, sprites, abilities} = pokemonData;

    pokemonHTML.name.innerText = name;
    pokemonHTML.sprite.src = sprites.front_default;
    abilities.forEach(async element => {
        const abilityData = await getPokemonAbilityData(element.ability.url);
        const effect_entries = abilityData.effect_entries;

        pokemonHTML.abilities.innerHTML += 
        `<li>
            ${element.ability.name}
            <div>Efecto:
                <ul>
                    ${effect_entries[0].effect}
                </ul>
            </div>
        </li>`
    });
};


getPokemonData();