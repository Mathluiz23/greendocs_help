function countCharacters(str) {
    const count = {};

    for (let char of str) {
        count[char] = (count[char] || 0) + 1; // Se não existir, começa em 0 e adiciona 1
    }

    return count;
}

// Testes
console.log(countCharacters("banana")); // { b: 1, a: 3, n: 2 }
console.log(countCharacters("sap")); // { s: 1, a: 1, p: 1 }
