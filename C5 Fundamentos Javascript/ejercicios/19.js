function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  let mensajePos = "Es positivo"
  let mensajeNeg = "Es negativo"

  if (num > 0) {
    return mensajePos
  } else if (num < 0) {
    return mensajeNeg
  }else{
    return false
  }
}

module.exports = esPositivo;