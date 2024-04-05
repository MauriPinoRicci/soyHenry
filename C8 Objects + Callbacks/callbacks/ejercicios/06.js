function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  let array2 = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    array2.push(cb(element));
  }
  return array2
}

module.exports = map;
