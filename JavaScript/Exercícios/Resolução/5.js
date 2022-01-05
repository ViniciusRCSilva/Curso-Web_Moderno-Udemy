/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. */

function maiorOuIgual(num1, num2){
    if(typeof num1 != typeof num2){
        return false
    }else if(num1 >= num2){
        return true
    }
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0"))
console.log(maiorOuIgual(5, 1))