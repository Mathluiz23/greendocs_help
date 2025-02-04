function findMissingNumber(arr) {
    const n = arr.length + 1; // Tamanho esperado do array se estivesse completo
    const sumExpected = (n * (n + 1)) / 2; // Soma da sequência de 1 a N
    const sumActual = arr.reduce((sum, num) => sum + num, 0); // Soma dos elementos no array

    return sumExpected - sumActual; // Diferença entre o esperado e o real
}

// Testes
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // 6
