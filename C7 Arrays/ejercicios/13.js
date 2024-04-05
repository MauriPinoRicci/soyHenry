function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let resp = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 === 0) {
      resp.push(element)
    }
  }

  return resp
}

module.exports = filtrarNumerosPares;
