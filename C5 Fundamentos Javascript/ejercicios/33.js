function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  let numeroPrimo = numero / numero % 1

  if (numero === numeroPrimo) {
      return true
  } else {
    return false
  }
}

module.exports = esNumeroPrimo;
