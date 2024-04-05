function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let textoInver = ""
   
   for (let i = 0; i < texto.length; i++) {
      let element = texto[i];
      textoInver = element + textoInver
   }

   return textoInver
}

module.exports = invertirTexto;
