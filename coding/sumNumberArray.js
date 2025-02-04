function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Testes
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, -2, 30])); // 38
