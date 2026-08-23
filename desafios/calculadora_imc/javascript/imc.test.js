import assert from "node:assert"
import test from "node:test"

import { isHeightInvalid, isWeightInvalid } from "./validations.js"
import { calculateImc, getBodyCondition } from "./calculateImc.js"

test("deve verificar se uma altura é invalida", () => {
    assert.equal(isHeightInvalid(0.4), true)
    assert.equal(isHeightInvalid(-999), true)
    assert.equal(isHeightInvalid(2.6), true)
    assert.equal(isHeightInvalid(999), true)
    assert.equal(isHeightInvalid(""), true)
})

test("deve verificar se uma altura é válida", () => {
  assert.equal(isHeightInvalid(2), false)
  assert.equal(isHeightInvalid(1.8), false)
})

test("deve verificar se um peso é inválido", () => {
  assert.equal(isWeightInvalid(""), true)
  assert.equal(isWeightInvalid(0), true)
  assert.equal(isWeightInvalid(-10), true)
})

test("deve verificar se um peso é válido", () => {
    assert.equal(isWeightInvalid(80), false)
    assert.equal(isWeightInvalid(60), false)
})

test("deve executar a função execute que calcula o IMC", () => {
  assert.deepEqual(calculateImc(80, 1.80), { imc: 24.7, condition: 'Peso normal', backgroundColor: '#00ff00b2' })
  assert.deepEqual(calculateImc(75, 1.82), { imc: 22.6, condition: 'Peso normal', backgroundColor: '#00ff00b2' })
  assert.deepEqual(calculateImc(90, 1.82), { imc: 27.2, condition: 'Sobrepeso', backgroundColor: '#ff8800b2' })
  assert.deepEqual(calculateImc(120, 1.82), { imc: 36.2, condition: 'Obeso', backgroundColor: '#ff0000b2' })
})

test("deve retornar a mensagem de peso ideal de acordo com o IMC", () => {
  assert.deepEqual(getBodyCondition(18.4), { condition: 'Abaixo do peso', backgroundColor: '#ff8800b2' })
  assert.deepEqual(getBodyCondition(20), { condition: 'Peso normal', backgroundColor: '#00ff00b2' })
  assert.deepEqual(getBodyCondition(26), { condition: 'Sobrepeso', backgroundColor: '#ff8800b2' })
  assert.deepEqual(getBodyCondition(33), { condition: 'Obeso', backgroundColor: '#ff0000b2' })
})