// Regex para verificar se a string tem entre 6 e 10 caracteres
const lengthRegex = /^.{6,10}$/;

// Teste com string
const testString = "abcdef";
console.log(lengthRegex.test(testString)); // true (válido)

const longString = "12345678901";
console.log(lengthRegex.test(longString)); // false (inválido)
