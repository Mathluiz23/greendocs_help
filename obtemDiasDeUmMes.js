const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

console.log(daysInMonth(2025, 1)); // 28 (fevereiro de 2025)
console.log(daysInMonth(2024, 1)); // 29 (fevereiro de 2024 - ano bissexto)
