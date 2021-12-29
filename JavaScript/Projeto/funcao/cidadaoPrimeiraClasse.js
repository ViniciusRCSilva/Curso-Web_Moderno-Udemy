// Função em JS é First-Class Object (Citizens)
// High-order function

// criar função de forma literal
function fun1() { }

// armazenar a função em uma variável
const fun2 = function() { }

// armazenar a função dentro de um array
const array = [function(a, b) {return a+b}, fun1, fun2];
console.log(array[0](2, 3));

// armazenar a função em um atributo de objeto
const obj = {}
obj.falar = function() {return 'opa'}
console.log(obj.falar());

// passar função como parâmetro
function run(fun) {
    fun();
}

run(function () { console.log('Executando...') });

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a+b+c);
    }
}

soma(2, 3)(4);
const cincoMais = soma(2, 3);
cincoMais(4);