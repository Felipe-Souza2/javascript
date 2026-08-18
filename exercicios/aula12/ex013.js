var agora = new Date()
var diaSemana = agora.getDay()
switch(diaSemana) {
  case 0: 
    console.log('domingo')
    break
  case 1: 
    console.log('segunda')
    break
  case 2:
    console.log('terca')
    break
  default:
    console.log('[erro] dia invalido')
    break
  
}