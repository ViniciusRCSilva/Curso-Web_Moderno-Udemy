function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com '+ nota);
    }
}

soBoaNoticia(7.1);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...'+ valor);
    }
}

// retornam falso
seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);

// retornam verdadeiro
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});