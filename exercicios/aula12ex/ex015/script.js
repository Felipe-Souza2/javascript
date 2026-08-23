function verificadorIdade() {
  var data = new Date()
  var ano = data.getFullYear()
  var formularioAno = window.document.getElementById('anoDeNascimento')
  var resultado = window.document.getElementById('resultado')
  if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano) {
    window.alert('erro') 
  } else {
    var sexo = document.getElementsByName('sexo')
    var idade = ano - Number(formularioAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute ('id', 'foto')
    if (sexo[0].checked) {
      genero = "Homem"
      if (idade >=0 && idade < 12) {
        img.setAttribute('src', 'imagens/crianca.png')
        console.log('oi')
      } else if (idade > 12 && idade <= 18){
        img.setAttribute('src', 'imagens/jovem.png')
      } else if (idade < 50) {
       img.setAttribute('src', 'imagens/adulto.png')
      } else  {
        img.setAttribute('src', 'imagens/idoso.png')
      }
      
    } else if (sexo[1].checked) {
      genero = "Mulher"
      if (idade >=0 && idade < 12) {
        img.setAttribute('src', 'imagens/crianca-m.png')
      } else if (idade > 12 && idade <= 18){
        img.setAttribute('src', 'imagens/jovem-m.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'imagens/adulto-m.png')
      } else  {
        img.setAttribute('src', 'imagens/idosa-m.png')
      }
     
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `Voce e uma ${genero}  de ${idade} Idade`
    resultado.appendChild(img)
  }
}