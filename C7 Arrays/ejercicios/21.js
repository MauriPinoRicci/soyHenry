function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let meses = []
  let eneroEncontrado = false;
  let marzoEncontrado = false;
  let noviembreEncontrado = false;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === "Enero") {
      meses.push(element);
      eneroEncontrado = true;
    } else if (element === "Marzo") {
      meses.push(element);
      marzoEncontrado = true;
    } else if (element === "Noviembre") {
      meses.push(element);
      noviembreEncontrado = true;
    }
  }

  if (eneroEncontrado && marzoEncontrado && noviembreEncontrado) {
    return meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
