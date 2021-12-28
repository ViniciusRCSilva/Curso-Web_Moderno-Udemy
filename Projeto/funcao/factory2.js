function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Pizza', 40))
console.log(criarProduto('Lasanha', 35))