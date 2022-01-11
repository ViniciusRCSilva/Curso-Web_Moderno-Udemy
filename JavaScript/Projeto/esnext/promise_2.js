/* setTimeout(() => {
    console.log('Executando callback')
    
    setTimeout(() => {
        console.log('Executando callback')
        
        setTimeout(() => {
            console.log('Executando callback')

        }, 2000)
    }, 2000)
}, 2000) */

const esperarPor = (tempo = 2000) => {
    return new Promise((resolve, reject) => {
        try{
            setTimeout(() =>{
                console.log('Executando promise')
                resolve()
            }, tempo)
        }catch(e){
            reject(e)
        }
    })
}

let p = esperarPor(3000)

p.then(() => esperarPor()).then(() => esperarPor()).then(() => esperarPor())