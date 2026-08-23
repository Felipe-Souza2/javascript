function retornoDaFuncao() {
  return { name: 'felipe', email: 'gostoso@gmail.com' }
}

function execute() {
  const { name, email } = retornoDaFuncao()
  const retorno = retornoDaFuncao()
  
  console.log(retorno)
  console.log(name, email)
}

execute()