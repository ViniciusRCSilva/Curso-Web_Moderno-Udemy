function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {
    preco: 49990,
    desc: 0.20
}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//                      contexto | parâmetros
console.log(getPreco.call(carro, 0.17, '$'))

// única diferença: os parâmetros têm que estar dentro de um array
console.log(getPreco.apply(carro, [0.17, '$']))