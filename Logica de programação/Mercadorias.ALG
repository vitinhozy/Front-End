// Algoritmo para calcular o valor total e a m�dia de mercadorias em estoque
algoritmo "estoque_mercadorias"
var
    nome: caractere
    valor: real
    total: real
    media: real
    i: inteiro
inicio
    // Inicializar o total
    total <- 0

    // Loop para entrada das mercadorias
    para i de 1 ate 3 faca
        escreva("Digite o nome da mercadoria ", i, ": ")
        leia(nome)
        escreva("Digite o valor da mercadoria ", i, ": ")
        leia(valor)

        // Acumular o valor total
        total <- total + valor
    fimpara

    // Calcular a m�dia
    media <- total / 3

    // Imprimir resultados
    escreval("Valor total em estoque: R$", total)
    escreval("M�dia de valor das mercadorias: R$", media)
fimalgoritmo
