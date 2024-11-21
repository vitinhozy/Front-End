function testes(){
    contador = 0
//
    //while(contador < 3){
        //alert('Teste!')
       // contador++


       for(var i = 0; i < 3; i++){
            alert('Testes' + `Fiz ${i} vezes`)
       }
}
//testes()

function carregarCatalogo(){
    for(let i = 0; i < 8; i++){
        document.getElementById('catalogo').innerHTML += `
            <div class="livro">
                <img src="images/diarioDeUmBanana.png" alt="">
                <h4>DIÁRIO DE UM BANANA</h4>

                <button>
                    Adicionar
                    <img src="images/icons/plus.svg" alt="Adicionar">
                </button>
            </div>
        `
    }
}

carregarCatalogo()
