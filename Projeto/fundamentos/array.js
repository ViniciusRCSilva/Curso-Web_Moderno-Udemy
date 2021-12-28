// Array
const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);
// Retorna o número de elementos dentro de um array
console.log(valores.length);

// Adiciona elementos dentro do array
valores.push({id: 3}, false, null, 'teste');
console.log(valores);

// Remove o último elemento dentro do array
valores.pop();
// Remove o elemento na posição desejada
delete valores[0];

valores[0] = 1.1;
console.log(valores);