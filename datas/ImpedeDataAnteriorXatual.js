const today = new Date().toISOString().split("T")[0]; // Formato "yyyy-MM-dd"
const dateInput = document.getElementById("dateField");

dateInput.setAttribute("min", today); // Define o mínimo como a data atual
