class Usuario {
    // id, @, nome, email, bio, genero 

    constructor(id, nickname, nome, email, bio, genero){
        this.id = id;
        this.nickname = nickname;
        this.nome = nome;
        this.email = email;
        this.bio = bio;
        this.genero = genero;

        this.postar = function(pensamento){
            document.querySelector('#resposta').innerHTML =`
                <div class = "post">
                    <h3>${this.nickname}</h3>
                    <p>${pensamento}</p>
                </div>          
            `
        }
    }
}

var user1 = new Usuario(1,'Victor','Vito','victor04@gamail.com','Programador','Masculino')
var user2 = new Usuario(2,'Red','redthun','vred0432@gamail.com','Programador','Masculino')

function postarFeed(){
    alert('POSTADO COM SUCESSO!')

    pensamento = document.querySelector('#pensamento').value

    user1.postar(pensamento)
}