function fatorial(number) {
  let fat = 1
  for (let count = number; count > 1; count --){
    fat *= count
  }
  return fat
}

console.log(fatorial(5))
// fazer de maneira recursiva(recursao quando uma funcao chama ela mesma) o fatorial
/*
5!(fatorial) =5 x (4 x 3 x 2 x 1)essa parte e mesma coisa de 4 fatorial entao se colocar 
5! = 5 x 4!

exemplo usado na function factorial acima 
exNumber! = exNumber x (exnumber - 1) (-1 porque o factorial de 1 = 1)
*/

function factorial (exNumber) {
  if (exNumber == 1) {
    return 1
  } else {
    return exNumber * factorial(exNumber - 1)
  }
}

console.log(factorial(4))

