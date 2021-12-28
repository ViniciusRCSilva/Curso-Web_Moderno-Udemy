// pessoa aponta para o endereço de memória 123 que aponta para o objeto que existe no endereço de memória
// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
/* pessoa = { nome: 'Ana' } */ // gera erro

Object.freeze(pessoa)

// continuará com o último valor armazenado
// pois o objeto está "congelado"
pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João' })
console.log(pessoaConstante)