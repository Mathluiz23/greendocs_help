// Regex para verificar uma URL
const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

const url = "https://www.exemplo.com";
console.log(urlRegex.test(url)); // true (válido)

const invalidUrl = "www.exemplo.com";
console.log(urlRegex.test(invalidUrl)); // false (inválido)


