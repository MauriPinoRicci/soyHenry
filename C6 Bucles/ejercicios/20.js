function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let resp = 0

   for (let i = 0; i <= n; i++) {
      resp += i;
      if (resp >= 100) {
         break;
      }else{
         continue
      }
      
   }

   return resp
}

module.exports = sumarHastaNConBreak;
