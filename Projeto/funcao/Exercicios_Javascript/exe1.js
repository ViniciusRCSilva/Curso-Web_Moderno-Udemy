/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function operacoes(x, y){
    return{
        soma: x+y,
        subtracao: x-y,
        multiplicacao: x*y,
        divisao: x/y
    }
}

console.log(operacoes(3, 5))
