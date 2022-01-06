const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const china = c => c.pais === 'China'

const feminino = f => f.genero === 'F'

function menorSalario(func, funcAtual){
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios.filter(china).filter(feminino).reduce(menorSalario)

    console.log(func)
})