let num = [4,3,5,7,6]
num[5] = 2
num.push(8)
num.push(1)
num.sort()
console.log(num)
console.log(`meu array tem ${num.length} posicoes`)
console.log(`primeiro valor do array e ${num[0]}`)
// .indexOf para buscar um elemento e saber qual posicao ele esta dentro do array
const position = num.indexOf(8)
if (position == -1) {
  console.log(`valor nao encontrado`)
} else{
  console.log(`o valor 7 esta na posicao ${position}`)
}