const lista = {
    'salgado' : [
        {
            'nome': 'Enroladinho de Queijo',
            'Desc' : 'Um delicioso enroladinho recheado com queijo e presunto.'
        },
    ],

    'doce' : [
        {
            'nome' : 'Brigadeiro',
            'Desc' : 'Doce tradicional brasileiro, feito com leite condensado, achocolatado e chocolate granulado.'
        },
    ],

    'sucos' : [
        {
            'nome' : 'Suco de laranja',
            'Desc' : 'Refrescante suco de laranja, ótimo para qualquer hora do dia.'
        },
    ]
}
//resultado salgado
const resultado1 = lista.salgado.map((elemento) =>{
    document.querySelector('body').innerHTML += `
        <div class="card"><img src="images/design-sem-nome-9-.jpg" alt="">
	        <h2>${elemento.nome}</h2>
	        <p>${elemento.Desc}</p>
         </div>
    `
})
//resultado doce
const resultado2 = lista.doce.map((elemento) =>{
    document.querySelector('body').innerHTML += `
        <div class="card">
        <img src="images/brigadeiro.jpg" alt="">
	        <h2>${elemento.nome}</h2>
	        <p>${elemento.Desc}</p>
         </div>
    `
})
//resultado sucos
const resultado3 = lista.sucos.map((elemento) =>{
    document.querySelector('body').innerHTML += `
        <div class="card">
        <img src="images/download.jpg" alt="">
	        <h2>${elemento.nome}</h2>
	        <p>${elemento.Desc}</p>
         </div>
    `
})