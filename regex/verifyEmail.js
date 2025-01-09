// Regex para validar um e-mail
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

const email = "exemplo@dominio.com";
console.log(emailRegex.test(email)); // true (válido)
