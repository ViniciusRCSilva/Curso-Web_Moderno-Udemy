/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

// cria um array com as pontuações
let array_pontuacao = '10 20 20 8 25 3 0 30 1'

// cria a função que vai receber o array e fazer as comparações entre os valores
function avaliaPontuacao(array_pontuacao) {
  // variável que irá armazenar o recorde de pontuações e a posição do array da pior pontuação
  let valores = []
  // a variável recebe os valores do array que foi dividido por vírgula
  let pontuacao = array_pontuacao.split(' ')
  // setamos todas as variáveis para receber seus respectivos valores
  let qtdQuebraRecordes = 0
  let piorJogo = 0
  let maiorPontuacao = 0
  let menorPontuacao = pontuacao[0]

  // percorremos todo o array
  for(let i = 0; i < pontuacao.length; i++){
    // se a pontuação for maior que a pontuação anterior, atualiza tanto a maior pontuação como incrementa a quantidade de quebra de recordes
    if(pontuacao[i] > maiorPontuacao){
      maiorPontuacao = pontuacao[i]
      qtdQuebraRecordes++
    }else{
      // pegamos a menor pontuação e, com isso, podemos pegar a posição da menor pontuação
      if(pontuacao[i] < menorPontuacao){
        menorPontuacao = pontuacao[i]
        piorJogo = i + 1
      }
    }
  }

  valores.push(qtdQuebraRecordes)
  valores.push(piorJogo)

  return valores
}

console.log(avaliaPontuacao(array_pontuacao))