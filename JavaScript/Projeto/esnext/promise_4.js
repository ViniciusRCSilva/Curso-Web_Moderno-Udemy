gerarNumerosEntre = (min, max, tempo) => {
    if(min > max){
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        setTimeout(() =>{
            const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
            resolve(aleatorio)
        }, tempo)
    })
}

console.time('promise')

const gerarNumeros = () => Promise.all([
    gerarNumerosEntre(1, 60, 1000),
    gerarNumerosEntre(1, 60, 4000),
    gerarNumerosEntre(1, 60, 500),
    gerarNumerosEntre(1, 60, 3000)
])

gerarNumeros()
.then(numeros => console.log(numeros)).then(() => { console.timeLog('promise'); console.timeEnd('promise') })