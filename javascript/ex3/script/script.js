function carregarCatalogo(){
    var filmes = [
        ['images/filmes/arcaDeNoe.jpg','Arca de Noé',]
    ]

    filmes.forEach(cadaFilme => {
        document.getElementById('catalogo').innerHTML +=`
             <div class="livro">
        <img src="${cadaFilme[0]}" alt="">
        <h4>${cadaFilme[1]}</h4>

        <button>
            Adicionar
            <img src="images/icons/plus.svg" alt="Adicionar">
        </button>
    </div>
        `

})
}

carregarCatalogo()

