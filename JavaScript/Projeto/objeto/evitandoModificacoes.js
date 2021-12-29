// Object.preventExtensions
// previne a extensão da quantidade de atributos do objeto

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

console.log(produto)

// Object.seal
// não adiciona ou exclui atributos do objeto
const pessoa = { nome: 'Vinicius', idade: 20 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa)

// Object.freeze
// não adiciona, exclui ou modifica atributos do objeto