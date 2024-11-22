

fruta = ['Melancia','Manga','Maracuja','Melão','Tomate']
teste = Array()
teste[0] = 'Oi'
teste[1] = 'Oi2'
teste[2] = 'Oi3' 

console.log(fruta)
console.log(fruta[1])
//PUSH - 'EMPURRAR'
fruta.push('Abacaxi')
console.log(fruta)

//UNSHiFIT - ADICIONA NO COMEÇO
fruta.unshift('Abacate')
console.log(fruta)

//POP - REMOVER O ULTIMO
fruta.pop()
console.log(fruta)

//SHIFT - REMOVER O PRIMEIRO
fruta.shift()
console.log(fruta)

//SPLICE - REMOVE, ADICIONA E ATUALIZA
//ONDE ? (INDICE), quantos vou deletar?
//SE NENHUM O QUE VOU ADICIONAR?
fruta.splice(2,1)
fruta.splice(2,0, 'Morango')
fruta.splice(3, 1, 'Kiwi')



fruta.push('Abacaxi')

fruta.forEach(cadaFruta => {
    document.getElementById('resposta').innerHTML += `
    ${cadaFruta} <br>
`
});