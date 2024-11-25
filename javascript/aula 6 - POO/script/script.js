class Cliente {
    nome;
    dataNascimento;
    cpf;
    email;
    telefone;
    tipoConta;
    saldo;
    deposito(valor){
        if(valor < 0){
            console.log('Operação não permitida')
        }else{
            this.saldo += valor
            console.log(`O valor de ${valor} foi efetuado com sucesso`)
        }
      
    }
    // argumento - é valor passado
    // parametero - palavra que salva o argumento 
    pix(valor){
        if(this.saldo < valor){
            console.log('Voce nao tem o saldo disponivel')
        }
        else{
            this.saldo -= valor
            console.log(`o valor de ${valor} foi depositado com sucesso`)
        }
    }
}

var cliente1 = new Cliente
cliente1.nome = 'leo'
cliente1.dataNascimento = '11/03/1968'
cliente1.cpf = 98888888-33
cliente1.email = 'leleo@gmai.com'
cliente1.saldo = 0

cliente1.pix(100)

console.log(cliente1)
