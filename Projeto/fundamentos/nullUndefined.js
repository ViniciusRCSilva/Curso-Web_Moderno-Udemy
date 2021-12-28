// Null e Undefined
let valor; // não inicializada -> undefined
console.log(valor);

valor = null; // variável inicializada porém com ausência de valor
console.log(valor);

// console.log(valor.toString()); -> Erro!

const produto = {};
console.log(produto.preco); // undefined

produto.preco = 3.50;

console.log(produto);

produto.preco = undefined; // evitar atribuir undefined
console.log(!!produto.preco); // retorna false
console.log(produto); // retorna undefined

produto.preco = null; // sem preço
console.log(!!produto.preco); // retorna false
console.log(produto); // retorna null