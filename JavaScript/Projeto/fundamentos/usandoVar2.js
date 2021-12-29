var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}

console.log('fora =', numero); // imprime 2, pois a variável não fica restrita pelo bloco de código