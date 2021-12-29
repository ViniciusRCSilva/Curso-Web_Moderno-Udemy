/* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

function elevarNum(base, expoente){
    // pode se usar da biblioteca Math
    /* return Math.pow(base, expoente) */
    
    // ou
    let resultado = base

    for(let i = expoente - 2; i>=0; i--){
        resultado *= base
    }

    return console.log(resultado)
}

elevarNum(3, 2)