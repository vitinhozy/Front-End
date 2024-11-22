function carregarCatalogo(){
    var livros = [
        ['images/livros/diarioDeUmBanana.png','DIÁRIO DE UM BANANA',],
        ['images/livros/caliceDeFogo.jpg','Harry Potter e o cálice de fogo'],
        ['images/livros/reisDoKpop.jpg', 'BTS: Reis do K-Pop'],
        ['images/livros/livroFelipeNeto.png', 'Como enfrentar o Ódio'],
        ['images/livros/itACoisa.webp','It: A coisa'],
        ['images/livros/comoFazerAmigos.webP', 'Como fazer amigos e influenciar pessoas']
    ]
livros.forEach(cadaLivro => {
    document.getElementById('catalogo').innerHTML += `
    <div class="livro">
        <img src="${cadaLivro[0]}" alt="">
        <h4>${cadaLivro[1]}</h4>

        <button>
            Adicionar
            <img src="images/icons/plus.svg" alt="Adicionar">
        </button>
    </div>
`
})
}

carregarCatalogo()
