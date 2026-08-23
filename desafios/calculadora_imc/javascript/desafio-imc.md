# Desafio: Calculadora de IMC

## Objetivo

Fazer uma página que calcula o Índice de Massa Corporal (IMC) de uma pessoa a partir do peso e da altura, e mostra em qual faixa de classificação ela se encaixa.

## O que a página precisa ter

- Um campo de input para o **peso** (em kg)
- Um campo de input para a **altura** (em metros, ex: 1.75)
- Um botão **Calcular**
- Um botão **Limpar**
- Um espaço na página onde o resultado aparece

## Regra de cálculo

```
IMC = peso / (altura * altura)
```

## Regra de classificação

Depois de calcular o IMC, mostrar a faixa correspondente:

| Faixa           | IMC              |
|-----------------|------------------|
| Abaixo do peso  | menor que 18.5   |
| Peso normal     | de 18.5 até 24.9 |
| Sobrepeso       | de 25 até 29.9   |
| Obesidade       | 30 ou mais       |

## Regras de validação

- Se o campo de peso ou o de altura estiver vazio, mostrar uma mensagem de erro (ex: "preencha peso e altura") e não calcular nada.
- Se a altura for 0 ou negativa, mostrar uma mensagem de erro (ex: "altura inválida") e não calcular nada. (Pense por quê: que operação da fórmula quebra se a altura for 0?)

## O que o botão Limpar precisa fazer

- Limpar os dois campos de input
- Limpar o resultado exibido na tela

## Dicas

- Você já usou `getElementById(...).value` pra pegar o que o usuário digitou. Vai precisar de novo aqui, só que com dois campos.
- Você já usou `if / else if / else` pra separar faixas (lembra do verificador de idade, com criança/jovem/adulto/idoso?). A lógica aqui é igual, só que com números de IMC em vez de idade.
- `Number(...)` continua sendo o jeito de transformar o texto do input em número antes de fazer conta com ele.
- Pra exibir o resultado, você pode montar uma frase só, por exemplo: `"Seu IMC é 22.3 - Peso normal"`, e jogar isso no `innerHTML` do elemento de resultado.

## Bônus (se quiser ir além)

- Arredondar o IMC pra mostrar só 1 casa decimal (dica: pesquise o método `toFixed`).
- Trocar a cor do resultado dependendo da faixa (ex: verde pra peso normal, vermelho pra obesidade).
