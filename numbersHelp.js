// 1. Método toFixed()
let num = 12.34567;
console.log(num.toFixed(2)); // "12.35" (arredonda para 2 casas decimais)
console.log(num.toFixed(3)); // "12.346" (arredonda para 3 casas decimais)

// 2. Método Number.isInteger()
let num1 = 12;
let num2 = 12.5;
console.log(Number.isInteger(num1)); // true (num1 é inteiro)
console.log(Number.isInteger(num2)); // false (num2 não é inteiro)

// 3. Função parseInt()
console.log(parseInt("100px")); // 100 (ignora "px" e converte "100")
console.log(parseInt("12.34abc")); // 12 (ignora ".34abc" e converte "12")
console.log(parseInt("abc123")); // NaN (não consegue converter a string para número)

// 4. Função parseFloat()
console.log(parseFloat("12.34abc")); // 12.34 (converte "12.34abc" para 12.34)
console.log(parseFloat("100px")); // 100 (converte "100px" para 100)
console.log(parseFloat("abc123")); // NaN (não consegue converter)

// 5. Método Math.round()
let num3 = 12.567;
console.log(Math.round(num3)); // 13 (arredonda para o inteiro mais próximo)

// 6. Método Math.floor()
console.log(Math.floor(num3)); // 12 (arredonda para baixo)

// 7. Método Math.ceil()
console.log(Math.ceil(num3)); // 13 (arredonda para cima)

// 8. Método Math.random()
console.log(Math.random()); // Exemplo: 0.123456789 (número aleatório entre 0 e 1)

// 9. Método Math.max()
console.log(Math.max(1, 5, 3, 9, 2)); // 9 (retorna o maior valor)

// 10. Método Math.min()
console.log(Math.min(1, 5, 3, 9, 2)); // 1 (retorna o menor valor)

// 11. Método Math.pow()
console.log(Math.pow(2, 3)); // 8 (2 elevado à potência 3)
console.log(Math.pow(5, 2)); // 25 (5 elevado à potência 2)
