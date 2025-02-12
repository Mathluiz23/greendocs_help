let arrayDePassaros = [1, 1, 2, 2, 3];
let arrayDePassaros2 = [4, 1, 1, 2, 4, 4, 2, 3];

function contagemPassaros(arrayDePassaros) {
  let repeteMaisvezesNum1 = 0;
  let repeteMaisvezesNum2 = 0;
  let repeteMaisvezesNum3 = 0;
  let repeteMaisvezesNum4 = 0;

  for (let i = 0; i < arrayDePassaros.length; i++) {
    switch (arrayDePassaros[i]) {
      case 1:
        repeteMaisvezesNum1 += 1;
        break;
      case 2:
        repeteMaisvezesNum2 += 1;
        break;
      case 3:
        repeteMaisvezesNum3 += 1;
        break;
      case 4:
        repeteMaisvezesNum4 += 1;
        break;
      default:
        break;
    }
  }

  let maisFrequente = 1;
  let maxFrequencia = repeteMaisvezesNum1;

  if (repeteMaisvezesNum2 > maxFrequencia || (repeteMaisvezesNum2 === maxFrequencia && 2 < maisFrequente)) {
    maisFrequente = 2;
    maxFrequencia = repeteMaisvezesNum2;
  }
  if (repeteMaisvezesNum3 > maxFrequencia || (repeteMaisvezesNum3 === maxFrequencia && 3 < maisFrequente)) {
    maisFrequente = 3;
    maxFrequencia = repeteMaisvezesNum3;
  }
  if (repeteMaisvezesNum4 > maxFrequencia || (repeteMaisvezesNum4 === maxFrequencia && 4 < maisFrequente)) {
    maisFrequente = 4;
    maxFrequencia = repeteMaisvezesNum4;
  }

  return maisFrequente;
}

console.log("Id mais frequente é:", contagemPassaros(arrayDePassaros));
console.log("Id mais frequente é:", contagemPassaros(arrayDePassaros2));
