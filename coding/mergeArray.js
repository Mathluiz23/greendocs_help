function mergeArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])]; // Une os arrays e remove duplicatas com Set
}

// Testes
console.log(mergeArrays([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeArrays([10, 20], [20, 30, 40])); // [10, 20, 30, 40]


// merge arrays
// Write a function that merges two arrays and removes duplicates.

// Example

// mergeArrays([1, 2, 3], [3, 4, 5]); // [1, 2, 3, 4, 5]
