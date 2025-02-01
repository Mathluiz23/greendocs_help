// Encontrar elementos que estão em um array, mas não em outro

const difference = (arr1, arr2) => arr1.filter(item => !arr2.includes(item));

console.log(difference([1, 2, 3, 4], [2, 4, 6])); // [1, 3]
