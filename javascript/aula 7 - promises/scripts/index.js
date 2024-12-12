//Promise é uma promessa
// resolve - cumpre a promessa
// Reject - 'Reeitamos' a promessa, ou não cumpriu
// PROMISESTATE - estado da promoção
// REJECTED - 'promessa quebrada'
//promiseresult - o motivo do status




const promessa = new Promise((resolve, reject) =>{
    let nome = 'Victor'

    if(nome == 'Victor'){
        resolve({'adm': 'victor'})
    }else{
        reject('Nome não é Victor')
    }
})
// then espera o result e retorna o que resolve tiver, caso reject acuse um erro
promessa.then((dadosDoResolve) => {
    console.log(dadosDoResolve)
})
// catch - esperar o reject e retorna o que o reject correspondente tiver, caso resolve ele não executa
// 'CATCH espera que dê errado'
promessa.catch((infoDoErro) => {
    console.log(infoDoErro)
})

function sujeitoDemorado(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log('Rodando')

            resolve()}
        , 2000)
    })
}

async function carregarConteudo(){
    console.log('oi')
    await sujeitoDemorado()
    console.log('terminou')
}

carregarConteudo()

