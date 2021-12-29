const Cliente = function() {}
console.log(typeof Cliente); // imprime function
console.log(typeof new Cliente); // imprime object

class Produto {}
console.log(typeof Produto); // imprime function
console.log(typeof new Produto()); // imprime object