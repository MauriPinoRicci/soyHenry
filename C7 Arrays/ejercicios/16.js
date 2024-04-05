function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  let resp = []
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    resp.push(element * i)
  }
  return resp
}

module.exports = multiplicarElementosPorIndice;
