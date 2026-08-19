function horaDoDia() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours();
  msg.innerText = `Agora sao ${hora} horas`
  if (hora >= 0 && hora < 12) {
    img.src = "imagens/manha3-0.png"
    document.body.style.background = '#e0bc6e'
  } else if (hora >= 12 && hora < 18 ) {
    img.src = "imagens/tarde3-0.png"
     document.body.style.background = '#e3d08e'
  } else {
    img.src = "imagens/noi.png"
     document.body.style.background = '#786453'
  }
}

