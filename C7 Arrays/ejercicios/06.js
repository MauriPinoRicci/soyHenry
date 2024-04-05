function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let arrayinvertido = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    arrayinvertido.unshift(element)
  }

  return arrayinvertido
}

module.exports = invertirArray;
