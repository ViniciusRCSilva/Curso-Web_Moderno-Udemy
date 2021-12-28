/* 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado. */

// função que recebe a nota como parâmetro e faz todos os processos de arrendodamento
function receberNota(nota){
    // se a nota for maior que 100, mostra mensagem de erro
    if(nota > 100 || nota < 0){
        return aprovacao(nota)
    }else{
        // se a nota for menor que 38, será reprovado
        if(nota < 38){
            return aprovacao(nota)
        } else{
            // se a nota for maior ou igual a 38, o aluno será aprovado
            if(nota >= 38){
                // se o resultado da divisão da nota por 5 for igual a 0, imprime na tela a nota
                if((nota % 5) == 0){
                    return aprovacao(nota)
                }else{
                    // se não, ele vai incrementando até que esse número seja divisível por 5
                    do{
                        nota++
                    }while((nota % 5) != 0)
                    return aprovacao(nota)
                }
            }
        }
    }
}

// função para otimizar a impressão dos resultados
function aprovacao(nota){
    if(nota > 100 || nota < 0){
        return console.log(`ERRO!\nVerifique a nota novamente | __NOTA:${nota}__`)
    }else{
        if(nota < 38){
            return console.log(`Reprovado com a nota: ${nota}`)
        }else{
            if(nota >= 38){
                return console.log(`Aprovado com a nota: ${nota}`)
            }
        }
    }
}

receberNota(84)  // arredonda para 85 - aprova
receberNota(29)  // reprova
receberNota(38)  // arredonda para 40 - aprova
receberNota(-1)  // erro
receberNota(101) // erro