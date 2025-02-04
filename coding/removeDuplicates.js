function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Testes
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([10, 20, 20, 30])); // [10, 20, 30]
