// function
console.log(typeof Promise)

let p = new Promise(cumprirPromessa => {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

// object
console.log(typeof p)

p.then(valor => console.log(valor))

p
    .then(primeiro => primeiro[0])
    .then(nome => nome.toLowerCase())
    .then(nomeMinusculo => console.log(nomeMinusculo))