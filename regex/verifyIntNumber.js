// Regex para verificar um número inteiro
const integerRegex = /^-?\d+$/;

const number = "-123";
console.log(integerRegex.test(number)); // true (válido)

const invalidNumber = "123.45";
console.log(integerRegex.test(invalidNumber)); // false (inválido)
