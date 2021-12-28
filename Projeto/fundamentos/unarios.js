let num1 = 1;
let num2 = 2;

num1++; // num1 = num1 + 1;
console.log(num1);
--num1; // num1 = num1 - 1;
console.log(num1);

console.log(++num1 === num2--); 
// imprime true, pois o num1 é pré incrementado enquanto num2 ainda vai receber o incremento depois da comparação