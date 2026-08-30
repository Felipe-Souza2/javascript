
function multiplicationTables() {
  let number = document.getElementById('multiplicationNumber')
  let multiple = document.getElementById('selectMultiplication')

  if (number == 0) {
     window.alert('Please, write a Number!')
     
  } else { 
    let amount =Number(number.value)
    let START = 1
    multiple.innerHTML =''
    while (START <= 10) {
      let item = document.createElement('option') 
      item.text = `${amount} x ${START} = ${amount * START}`
      multiple.appendChild(item)
      START++
    }
  }
}