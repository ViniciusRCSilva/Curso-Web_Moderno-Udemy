const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

// vai receber os índices do array e não o valor em si
for(let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Silva',
    idade: 19,
    peso: 70   
}

// melhor para objetos
for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`);
}