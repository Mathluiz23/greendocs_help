function bubbleSort(arr) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Troca os elementos de posição
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped); // Repete até não haver mais trocas

    return arr;
}

// Testes
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
console.log(bubbleSort([10, -2, 4, 0])); // [-2, 0, 4, 10]
