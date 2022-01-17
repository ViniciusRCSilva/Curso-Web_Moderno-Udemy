const funcionarOuNao = (valor, chanceErro) => {
    return new Promise((resolve, reject) => {
        try{
            /* con.log('gera erro') */
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro')
            }else{
                resolve(valor)
            }
        }catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
    .then(
        v => console.log(`Valor: ${v}`),
        err => console.log(`Erro específico: ${err}`)
        )
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim'))