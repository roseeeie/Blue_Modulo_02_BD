const cardPokemons = document.querySelectorAll(".card_pokemon");/*manipulkmkkkkk  ;+
  ar elementos da classe */
const pokemonSelecionado = document.querySelector('#pokemon_selecionado');


//logica para selecuionar um pokemon quando clicar no card 

for (const cardPokemon of cardPokemons) {// igual ao for feito no html usando python
    // para cada card dentro do grupo 
    cardPokemon.addEventListener('click', function () {

        const nomePokemon = this.getAttribute('data-nome');
        if (!this.classList.contains('selecionado')) {
            this.classList.add('selecionado');//Controlando o que esta selecionado 
            pokemonSelecionado.innerHTML = `O ultimo pokemon selecioando foi o <b>${nomePokemon}</b>`;//troca o nome do pokemon 

        } else {
            this.classList.remove('selecionado');
            const pokemonsSelecionados = document.querySelectorAll('.selecionado');//puxar o nome do card que foi clkicado e trazer quandos cards ainda estão selecionados 
            if (pokemonsSelecionados.length >= 1) {
                pokemonSelecionado.innerHTML = `VOcê desmarcor o pokemon <b>${nomePokemon}</b>. Restantes:<b>${pokemonsSelecionados.length}</b>`;

            } else {
                pokemonSelecionado.innerHTML = 'Selecione um Pokemon';
            }


        }



    })//indica para o javascript o que vai acontecer quandoi clicar na imagem 

}