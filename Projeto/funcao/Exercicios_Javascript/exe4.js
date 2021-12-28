/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function divisao(dividendo, divisor){
    let resultado = 0

    resultado = dividendo / divisor

    let resto = 0

    resto = dividendo % divisor

    return console.log(`Resultado da divisão: ${resultado} | Resto da divisão: ${resto}`)
}

divisao(10, 5)