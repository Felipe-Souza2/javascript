 function calcular() {
      var peso = window.document.getElementById('peso').value
      var altura = window.document.getElementById('altura').value
      var resultado = window.document.getElementById('resultado')
      var alturametro = Number(altura)
      var imc=  Number(peso) /  Number(altura * altura)
     
      if (alturametro < 0.5 || alturametro > 2.5) {
        resultado.innerHTML = 'Utilize altura em metros'
      } else if (altura === '' || peso === '') {
        resultado.innerHTML = 'preencha peso e altura' 
      } else if (Number(altura) <= 0 || Number(peso )<= 0) {
        resultado.innerHTML = 'altura ou peso invalido'
      } else if (Number(peso )>= 999) {
        resultado.innerHTML = 'altura ou peso invalido'
      } else  {
        if (imc < 18.5) {
          resultado.innerHTML = `Seu IMC e: ${imc.toFixed(1)} - Abaixo do peso`
          document.body.style.background = '##ff8800b2'
        } else if (imc < 24.9) {
          resultado.innerHTML = `Seu IMC e: ${imc.toFixed(1)} - Peso nomal`
          document.body.style.background = 'green'
        } else if (imc <= 29.9) {
          resultado.innerHTML = `Seu IMC e: ${imc.toFixed(1)} - Sobrepeso`
          document.body.style.background = '#ff8800b2'
        } else if (imc > 30) {
          resultado.innerHTML = `Seu IMC e: ${imc.toFixed(1)} - Obesidade`
          document.body.style.background = '#ff0000b2'
        }
      }
      resultado.style.textAlign = 'center'
      window.document.getElementById('imcTable').className = 'show'
    }

    function limpar() {
      window.document.getElementById('peso').value = ''
      window.document.getElementById('altura').value = ''
      window.document.getElementById('resultado').innerHTML = ''
      window.document.getElementById('imcTable').className = 'hidden'
    }
    