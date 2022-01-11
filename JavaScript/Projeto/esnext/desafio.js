const fs = require('fs')
const caminho = __dirname + '/dados.txt'

const lerArquivo = caminho => {
    return new Promise((resolve, reject) => {
        try{
            fs.readFile(caminho, (_, conteudo) => {
                resolve(conteudo.toString())
            })
        }catch(e){
            reject(e)
        }
    })
}

lerArquivo(caminho).then(conteudo => console.log(conteudo)).catch(e => console.log(e))

lerArquivo(caminho).then(conteudo => conteudo.split('\n')).then(linha => console.log(linha[1])).catch(e => console.log(e))