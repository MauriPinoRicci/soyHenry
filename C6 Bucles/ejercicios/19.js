function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let suma = 0; // Inicializamos la variable suma en 0
  for (let i = 1; i <= n; i++) {
    suma += i; // Sumamos cada número desde 1 hasta n
  }
  return suma;
}

module.exports = sumarHastaN;
