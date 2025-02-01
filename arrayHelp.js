// Principais Métodos de Manipulação de Arrays em JavaScript

// 1. Adição e Remoção de Elementos
let arr = [1, 2, 3];
arr.push(4); // Adiciona ao final -> [1, 2, 3, 4]
arr.pop(); // Remove o último -> [1, 2, 3]
arr.unshift(0); // Adiciona ao início -> [0, 1, 2, 3]
arr.shift(); // Remove o primeiro -> [1, 2, 3]

// 2. Acessar e Buscar Elementos
console.log(arr.indexOf(2)); // Retorna 1
console.log(arr.includes(3)); // Retorna true

// 3. Iteração e Transformação
arr.forEach(num => console.log(num * 2)); // 2, 4, 6
let newArr = arr.map(num => num * 2); // [2, 4, 6]
let filteredArr = arr.filter(num => num > 1); // [2, 3]
let sum = arr.reduce((acc, num) => acc + num, 0); // 6

// 4. Ordenação e Modificação
let nums = [3, 1, 2];
nums.sort(); // [1, 2, 3]
nums.reverse(); // [3, 2, 1]

// 5. Divisão e Combinação
let sliced = arr.slice(1, 3); // [2, 3]
let combined = arr.concat([4, 5]); // [1, 2, 3, 4, 5]
let flattened = [[1, 2], [3, 4]].flat(); // [1, 2, 3, 4]

// Métodos compatíveis com ECMAScript 3
let ecma3Arr = [10, 20, 30];
ecma3Arr.push(40);
ecma3Arr.pop();
ecma3Arr.shift();
ecma3Arr.unshift(5);
let ecma3Sorted = ecma3Arr.sort();
let ecma3Reversed = ecma3Arr.reverse();
