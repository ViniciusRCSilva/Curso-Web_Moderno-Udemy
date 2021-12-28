/* 12) Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(num){
    let resultado = num

    do{
        num--
        resultado *= num
    }while(num > 1)

    return console.log(resultado)
}

fatorial(3) // 6
fatorial(4) // 24
fatorial(5) // 120