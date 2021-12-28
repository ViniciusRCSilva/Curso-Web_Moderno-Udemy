/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function juros_simples(cap_inicial, taxa_juros, tempo_aplicacao, moeda = 'R$'){
    let juros = cap_inicial * taxa_juros * tempo_aplicacao

    // toFixed(2) --> duas casas decimais
    // toString() --> converte para string
    // replace    --> muda o ponto para vírgula
    let montante = (cap_inicial + juros).toFixed(2).toString().replace('.', ',')

    return console.log(`Montante da aplicação sob o regime de juros simples: ${moeda}${montante} | `)
}

function juros_compostos(cap_inicial, taxa_juros, tempo_aplicacao, moeda = 'R$'){
    let montante = cap_inicial * Math.pow((1 + taxa_juros), tempo_aplicacao)

    let juros = (montante - cap_inicial).toFixed(2).toString().replace('.', ',')

    return console.log(`Valor da aplicação sob o regime de juros compostos: ${moeda}${juros}`)
}

juros_simples(3000, 0.03, 5)

juros_compostos(3000, 0.03, 5)