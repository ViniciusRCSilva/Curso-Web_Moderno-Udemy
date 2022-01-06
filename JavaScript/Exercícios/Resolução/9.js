/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado. */

function repetir(valor, quantidade){
    let resultado = []
    for(let i = 0; i < quantidade; i++){
        resultado.push(valor)
    }

    return resultado
}

console.log(repetir("código", 2))
console.log(repetir(7, 3))