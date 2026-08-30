// tradicional do percursopara exibicao em array
let value = [4, 3, 8, 9, 1, 2]
console.log(value)
for (let pos = 0; pos < value.length; pos++) {
  console.log(`a posicao ${pos} tem o valor ${value[pos]}`) 
}

// forma simplificada utilizado  o for in
let value2 = [4, 3, 5, 6, 1, 2]
for (let pos in value2) {
  console.log(`a posicao ${pos} tem o valor ${value2[pos]}`)
}