/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro. */

function simboloMais(num){
    let resultado = ''
    for(let i = 0; i < num; i++){
        resultado += '+'
    }

    return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(4))