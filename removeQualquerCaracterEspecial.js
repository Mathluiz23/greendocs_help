// função para remover qualuqer caracter especial de um texto ou campo.

function removerCaracteresEspeciais(texto) {
    return texto.replace(/[^a-zA-Z0-9\s]/g, "");

}


var textoOriginal = "TESTE! @2025 #texto&especial.";

var textoLimpo = removerCaracteresEspeciais(textoOriginal);

console.log("Texto original:", textoOriginal);

console.log("Texto limpo:", textoLimpo); 