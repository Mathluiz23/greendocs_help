// Desabilitar Botão até que Todos os Campos Obrigatórios Estejam Preenchidos

const form = document.getElementById("form");
const button = document.getElementById("submitButton");

form.addEventListener("input", () => {
  const allFieldsFilled = Array.from(form.elements).every(field => 
    field.type !== "submit" && field.type !== "button" && (field.value || field.checked)
  );
  button.disabled = !allFieldsFilled;
});
