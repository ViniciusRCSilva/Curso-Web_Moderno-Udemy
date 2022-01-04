const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// retira o último elemento
pilotos.pop()
console.log(pilotos)

// adiciona um elemento
pilotos.push('Verstappen')
console.log(pilotos)

// retira da primeira posição o elemento
pilotos.shift()
console.log(pilotos)

// adiciona um elemento na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// adiciona ou remove elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
pilotos.splice(3, 1)
console.log(pilotos)

// novo array
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)