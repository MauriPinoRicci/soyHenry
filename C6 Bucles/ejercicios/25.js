function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
   let palabra = ""
   for (let i = 0; i < string.length; i++) {
      const element = string[i];
      palabra = element + palabra
   }

   if (palabra === string) {
      return true
   }else{
      return false
   }
}

module.exports = esPalindromo;
