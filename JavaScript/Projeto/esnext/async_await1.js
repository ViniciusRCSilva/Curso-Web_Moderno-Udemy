const esperarPor = (tempo = 2000) => {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() => resolve(), tempo)
        }catch(e){
            reject(e)
        }
    })
}

/* esperarPor()
    .then(esperarPor())
    .then(() => console.log('promise 1...'))
    .then(esperarPor())
    .then(() => console.log('promise 2...'))
    .then(esperarPor())
    .then(() => console.log('promise 3...')) */

const retornarValor = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

const retornarValorRapido = async () => {
    return 20
}

let executar = async () => {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`async/await ${valor}...`)

    await esperarPor(1500)
    console.log(`async/await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`async/await ${valor + 2}...`)

    return valor + 3
}

let executarDeVerdade = async () => {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()