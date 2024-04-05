function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  let arrayMayor = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (arrayMayor.length > element.length) {
      arrayMayor = element
    }
  }

  return arrayMayor
}

module.exports = ordenarArray;
