import { isHeightInvalid, isWeightInvalid } from "./validations.js"

const IMC_LOW = 18.5
const IMC_NORMAL = 24.9
const IMC_HIGH = 29.9

export function execute() {
  const weight = Number(document.getElementById('peso').value)
  const height = Number(document.getElementById('altura').value)
  const result = document.getElementById('resultado')
  const errorField = document.getElementById('error')

  if (isWeightInvalid(weight)) {
    errorField.className = 'show'
    errorField.innerHTML = "peso invalido"
    return
  }

  if (isHeightInvalid(height)) {
    errorField.className = 'show'
    errorField.innerHTML = "altura invalida"
    return
  }

  const { imc, condition, backgroundColor } = calculateImc(weight, height)
  result.innerHTML = `Seu IMC é: ${imc} - ${condition}`
  document.body.style.background = backgroundColor
}

export function calculateImc(weight, height) {
  const imc = Number((weight / (height * height)).toFixed(1))
  const { condition, backgroundColor } = getBodyCondition(imc)
  return { imc, condition, backgroundColor }
}

export function getBodyCondition(imc) {
  if (imc < IMC_LOW) return { condition: 'Abaixo do peso', backgroundColor: '#ff8800b2' }
  if (imc < IMC_NORMAL) return { condition: 'Peso normal', backgroundColor: '#00ff00b2' }
  if (imc < IMC_HIGH) return { condition: 'Sobrepeso', backgroundColor: '#ff8800b2' }
  return { condition: 'Obeso', backgroundColor: '#ff0000b2' }
}

if (typeof window !== 'undefined') {
  window.execute = execute
}