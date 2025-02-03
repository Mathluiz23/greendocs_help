function inverterString(texto) {
    let resultado = "";
    for (let i = texto.length -1; i >= 0; i--) {
        resultado += texto[i];
    }
    return resultado;
}

console.log(inverterString("TESTE"));


function inverterString(texto) {
    return texto.split("").reverse().join("");
}

console.log(inverterString("TESTE"));