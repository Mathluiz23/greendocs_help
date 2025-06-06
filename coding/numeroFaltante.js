function numeroFaltante(lista) {
    let n = lista.length + 1; // 6
    let somaEsperada = (n * (n + 1)) / 2; // 21
    let somaReal = lista.reduce((acc, num) => acc + num, 0); 18
    return somaEsperada - somaReal;
}

console.log(numeroFaltante([1, 2, 4, 5, 6])); // Saída: 3