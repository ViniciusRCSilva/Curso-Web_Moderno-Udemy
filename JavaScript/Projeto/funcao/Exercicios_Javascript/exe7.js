/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

// criamos a função que vai receber como parâmetro os valores de 'a', 'b', e 'c'
function bhaskara(a, b, c){
    let resultado = []

    let delta = Math.pow(b, 2) - (4 * a * c)

    if(delta < 0){
        return console.log(`Delta é negativo`)
    }

    let x1 = ((b + delta) / (2 * a)).toFixed(2)

    let x2 = ((b - delta) / (2 * a)).toFixed(2)

    resultado.push(x1)
    resultado.push(x2)

    return resultado
}

console.log(bhaskara(3, -5, 12)) // exemplo em que delta é negativo

console.log(bhaskara(3, 10, 6))