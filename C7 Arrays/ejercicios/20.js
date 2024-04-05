function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[0]) {
      return false; // Si encontramos un elemento diferente al primero, retornamos false
    }
  }
  
  // Si llegamos aquí, significa que todos los elementos son iguales
  return true;
}

module.exports = todosIguales;
