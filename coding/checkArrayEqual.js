function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; // Se os tamanhos forem diferentes, não são iguais

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false; // Se houver diferença, retorna falso
    }

    return true; // Se passou por todo o loop sem diferenças, retorna verdadeiro
}

// Testes
console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1])); // false
console.log(areArraysEqual([1, 2, 3], [1, 2, 3, 4])); // false
