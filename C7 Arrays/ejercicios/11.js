function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let array2 = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i] * 2;
   array2.push(element)
  }
  return array2
}

module.exports = duplicarElementos;
