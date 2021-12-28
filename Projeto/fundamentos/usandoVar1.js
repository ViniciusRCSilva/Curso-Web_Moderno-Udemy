{{{{ var sera = 'Será???'; }}}}

console.log(sera); // imprime, pois ficará visível mesmo fora do bloco

function teste() {
    var local = 123;
}

teste();
console.log(local); // erro! Não imprime, pois fora da função, a variável não é visível