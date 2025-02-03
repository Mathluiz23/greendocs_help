// 1. Obtendo o ano
let now = new Date();
console.log(now.getFullYear()); // Ex: 2025

// 2. Obtendo o mês (com base 0)
console.log(now.getMonth()); // Ex: 0 para janeiro

// 3. Obtendo o dia da semana
console.log(now.getDay()); // Ex: 0 para domingo, 1 para segunda, etc.

// 4. Obtendo o dia do mês
console.log(now.getDate()); // Ex: 31

// 5. Obtendo a hora
console.log(now.getHours()); // Ex: 10 (hora atual)

// 6. Obtendo os minutos
console.log(now.getMinutes()); // Ex: 30 (minutos atuais)

// 7. Obtendo os segundos
console.log(now.getSeconds()); // Ex: 45 (segundos atuais)

// 8. Obtendo os milissegundos
console.log(now.getMilliseconds()); // Ex: 500 (milissegundos atuais)

// 9. Definindo uma data específica
let specificDate = new Date(2025, 0, 31); // Ano, mês (0 para janeiro), dia
console.log(specificDate); // Exibe: "2025-01-31T00:00:00.000Z"

// 10. Conversão de string para Date
let dateString = "2025-01-31T10:00:00.000Z";
let dateFromString = new Date(dateString);
console.log(dateFromString); // Converte a string para um objeto Date

// 11. Verificando se uma data é válida
let invalidDate = new Date("invalid-date-string");
console.log(invalidDate.getTime()); // Retorna NaN se a data não for válida

// 12. Obtendo a data no formato local
console.log(now.toLocaleDateString()); // Exibe a data no formato local (ex: "31/01/2025")
console.log(now.toLocaleTimeString()); // Exibe o horário no formato local (ex: "10:00:00")

// 13. Adicionando ou subtraindo tempo
now.setFullYear(now.getFullYear() + 1); // Adiciona 1 ano
console.log(now); // Exibe a nova data com 1 ano a mais

now.setMonth(now.getMonth() - 1); // Subtrai 1 mês
console.log(now); // Exibe a nova data com 1 mês a menos

// 14. Comparando datas
let date1 = new Date("2025-01-31");
let date2 = new Date("2025-02-01");
console.log(date1 > date2); // false (date1 é anterior a date2)
console.log(date1 < date2); // true (date1 é anterior a date2)
