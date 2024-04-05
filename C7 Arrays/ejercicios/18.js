function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let promedio = 0
  let sumaNotas = 0

  for (let i = 0; i < resultadosTest.length; i++) {
    const element = resultadosTest[i];
    sumaNotas = sumaNotas + element
    promedio = sumaNotas / resultadosTest.length
  }

  return promedio
}

module.exports = promedioResultadosTest;
