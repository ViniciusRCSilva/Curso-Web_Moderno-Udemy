/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

// três métodos funcionais :-)

function diaDaSemana(dia){
    switch(dia){
        case 1:
            return console.log('Fim de Semana')

        case 2:
            return console.log('Dia Útil')

        case 3:
            return console.log('Dia Útil')

        case 4:
            return console.log('Dia Útil')

        case 5:
            return console.log('Dia Útil')

        case 6:
            return console.log('Dia Útil')

        case 7:
            return console.log('Fim de Semana')

        default:
            return console.log('Dia Inválido')
    }
}

function diaDaSemana2(dia){
    if(dia < 8){
        switch(dia){
            case 1:
                return console.log('Fim de Semana')
    
            case 7:
                return console.log('Fim de Semana')
    
            default:
                return console.log('Dia Útil')
        }
    }else{
        return console.log('Dia Inválido')
    }
}

function diaDaSemana3(dia){
    if(dia > 7){
        return console.log('Dia Inválido')
    }

    switch(dia){
        case 1:
            return console.log('Fim de Semana')

        case 7:
            return console.log('Fim de Semana')

        default:
            return console.log('Dia Útil')
    }
}

diaDaSemana(1)
diaDaSemana(3)
diaDaSemana(7)
diaDaSemana(10)

diaDaSemana2(1)
diaDaSemana2(3)
diaDaSemana2(7)
diaDaSemana2(10)

diaDaSemana3(1)
diaDaSemana3(3)
diaDaSemana3(7)
diaDaSemana3(10)