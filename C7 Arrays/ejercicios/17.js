function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:

  //[12,10,11,22]

 
  let resp = 0
  for (let i = 0; i < arrayOfNums.length; i++) {
    const element = arrayOfNums[i];
    resp = resp + element
  }

  return resp
}

module.exports = agregarNumeros;
