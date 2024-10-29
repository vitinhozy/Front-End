Algoritmo "classificacao"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 

Var
idade: inteiro
classifcacao: caractere
Inicio
 procedimento classificacao(idade: inteiro): caractere


              inicio
                    se(idade >= 5) e (idade <= 7)entao
                             escreval("Categoria Infantil A")
                             senao
                             se(idade >= 8) e (idade <= 11)entao
                                      escreval("Categoria Infantil")
                                      senao
                                           se(idade >= 12) e (idade <= 13)entao
                                           escreval("Categoria Infantil")
                                           senao
                                                se(idade >= 14) e (idade <= 17)entao
                                                escreval("Categoria Infantil")
                                                senao
                                                escreval("Adultos")
                                           fimse
                                      fimse
                             fimse
                    fimse
 fimProcedimento
 
escreval("Digite a idade do nadador: ")
leia(idade)
classificacao(idade)



Fimalgoritmo