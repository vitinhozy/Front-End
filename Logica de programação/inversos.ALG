algoritmo "inverter_numeros"
var
    numeros: vetor[1..5] de inteiro
    i: inteiro
inicio
    para i de 1 ate 5 faca
        escreva("Digite o n�mero ", i, ": ")
        leia(numeros[i])
    fimpara
    escreva("N�meros em ordem inversa: ")
    para i de 5 ate 1 passo -1 faca
        escreva(numeros[i], " ")
    fimpara
fimalgoritmo
