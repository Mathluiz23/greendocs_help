// teste SAP
// Refatorando utilizando Map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

let arrayDePassaros = [1, 1, 2, 2, 3];
let arrayDePassaros2 = [4, 1, 1, 2, 4, 4, 2, 3];

function contagemPassarosMap(array) {
    let contagem = new Map();
  
    for (let id of array) {
      contagem.set(id, (contagem.get(id) || 0) + 1);
    }
  
    return [...contagem.entries()]
      .sort((a, b) => b[1] - a[1] || a[0] - b[0])
      [0][0];
  }
  
  console.log("Usando Map, ID mais frequente é:", contagemPassarosMap(arrayDePassaros));
  console.log("Usando Map, ID mais frequente é:", contagemPassarosMap(arrayDePassaros2));
  