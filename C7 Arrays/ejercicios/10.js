function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
   if (element.length > 5) {
    return element
   }
  }
}

module.exports = obtenerPrimerStringLargo;
