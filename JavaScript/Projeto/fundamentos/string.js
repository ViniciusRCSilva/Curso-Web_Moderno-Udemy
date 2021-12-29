// String
// Posições:    01234
const escola = 'Cod3r';

// Retorna o caracter da posição escolhida
console.log(escola.charAt(3));
// Retorna o código relacionado a tabela Unicode
console.log(escola.charCodeAt(3));
// Retorna se existe o valor dentro da String
console.log(escola.indexOf('3'));
// Retorna a string menos os caracteres das posições escolhidas
console.log(escola.substring(0, 3));
// Modifica a posição desejada por outro caracter
console.log(escola.replace(3, 'e'));
// Concatenação
console.log('Escola '.concat(escola).concat('!'));
// Separação
console.log('Ana,Maria,Pedro'.split(','));