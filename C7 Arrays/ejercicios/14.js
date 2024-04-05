function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let resp = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (array[i] >= 10) {
      resp.push(array[i])
    }
  }
  return resp.length
}

module.exports = contarElementosMayoresA10;
