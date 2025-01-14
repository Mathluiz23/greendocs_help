// Regex para verificar se a string contém apenas letras e espaços
const lettersAndSpacesRegex = /^[a-zA-Z\s]+$/;

// Teste com string
const validString = "Hello World";
console.log(lettersAndSpacesRegex.test(validString)); // true (válido)

const invalidString = "Hello World 123";
console.log(lettersAndSpacesRegex.test(invalidString)); // false (inválido)
