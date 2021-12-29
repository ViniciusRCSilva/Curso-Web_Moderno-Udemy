/* 14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console. */

// OBS.: FUNCIONA APENAS EM BROWSERS (Motivo: prompt())

function frutas(fruta){
    switch(fruta){
        case "maçã":
            return console.log('Não vendemos esta fruta aqui')

        case "kiwi":
            return console.log('Estamos com escassez de kiwis')

        case "melancia":
            return console.log('Aqui está, são 3 reais o quilo')
        
        default:
            return console.log('ERRO')
    }
}

let fruta = prompt("Digite a fruta que deseja: ")

frutas(fruta)