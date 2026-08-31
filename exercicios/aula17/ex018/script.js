const number = document.getElementById('number')
const list = document.getElementById('list')
const result = document.getElementById('result')
const value =[]

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) return true
  return false
}
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) return true
  return false
}

function adicionar() {
  if (isNumber(number.value) && !inList(number.value, value)) {
    value.push(Number(number.value))
    let item =document.createElement('option')
    item.text = `Valor ${number.value} adicionado`
    list.appendChild(item)
    result.innerHTML = '' 
  } else {
    window.alert('valor invalido ou ja adicionado na lista!')
  }
  number.value =''
  number.focus()
}

function finalizar() {
  if (value.length == 0) {
    window.alert('adicione valores antes de finalizar!')
  } else {
    let overall = value.length
    let bigger = value[0]
    let smaller = value[0]
    let sum = 0
    let average = 0
    for (let position in value) {
      sum += value[position]
      if (value[position] > bigger) 
        bigger = value[position]
      if (value[position] < smaller) 
          smaller = value[position]
    }
    average = sum / overall
    result.innerHTML = '' 
    result.innerHTML +=`<p>Ao todo temos ${overall} elementos.</p>`
    result.innerHTML +=`<p>O maior valor informado e ${bigger}.</p>`
    result.innerHTML +=`<p>O menor valor informado e ${smaller}.</p>`
    result.innerHTML +=`<p>A soma de todos os valores informados e ${sum}.</p>`
    result.innerHTML +=`<p>A media de todos os valores informados e ${average.toFixed(2)}.</p>`
  }
}
