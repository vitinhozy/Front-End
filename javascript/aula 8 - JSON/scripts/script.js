

document.querySelector('#logar').addEventListener('click', logar)

function logar(){
    let nome_digitado = document.querySelector('#nome').value
    let nome_salvo = ''
    let senha_digitada = document.querySelector('#senha').value
    let senha_salva = ''
    let login = false

    fetch('dados.json').then((response) =>{
        return response.json()
    }).then((dados) => {
        dados.usuarios.map((informacoes) =>{
            nome_salvo = informacoes.nome
            senha_salva = informacoes.senha

            if(nome_digitado == nome_salvo & senha_digitada == senha_salva){
                login = true
            }

            if(login){
                alert('Login Efetuado com sucesso')
                window.location = 'https://www.google.com'
            }else{
                document.querySelector("#resposta").innerHTML = "Usuario e senha incorreta"
            }
        })
    })


}


