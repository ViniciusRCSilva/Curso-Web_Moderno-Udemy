let a = 3;

global.b = 123;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log(this.a); // undefined | não vai encontrar
console.log(global.a); // global dentro do Node equivale ao window do Browser
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this); // imprime true
console.log(module.exports);

// Criando uma variável sem var e let!
abc = 3; // não fazer isso!!!
console.log(global.abc);

// Comumente usado:
// module.exports = { e: 456, f: false, g: 'teste' };