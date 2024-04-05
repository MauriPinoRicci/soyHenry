function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let numGrande = array[0]
  let indiceMax = 0

  for (let i = 0; i < array.length; i++) {
    if (array[i] > numGrande) {
      numGrande = array[i];
      indiceMax = i;
    }
  }
}

module.exports = encontrarIndiceMayor;
