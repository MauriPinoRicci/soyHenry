function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let arrayDeA = []
   for (let i = 0; i < arrayOfStrings.length; i++) {
      const element = arrayOfStrings[i];
      if (element[0] === "a") {
         arrayDeA.push(element)
      }
   }
   return arrayDeA
}

module.exports = filter;
