const pessoa = {
    nome: 'Vini',
    idade: 19,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

// Tire de dentro do objeto (pessoa) os atributos (nome, idade)
const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { endereco: {logradouro, numero} } = pessoa;
console.log(logradouro, numero);