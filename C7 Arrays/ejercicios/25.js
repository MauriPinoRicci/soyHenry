function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let numPar = 0

  for (let i = 0; i < numeros.length; i++) {
    const element = numeros[i];
    if (element % 2 === 0) {
      numPar++
    }else{
      continue
    }
  }
  return numPar
}

module.exports = contarParesConContinue;
