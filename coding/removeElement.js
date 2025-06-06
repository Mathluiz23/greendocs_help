
function removeElement(arr, value) {
    return arr.filter(item => item !== value); // Filtra os elementos diferentes do valor a ser removido
}

console.log(removeElement([1, 2, 3, 2, 4], 2)); // [1, 3, 4]
console.log(removeElement([10, 20, 30, 20], 20)); // [10, 30]
console.log(removeElement([5, 5, 5], 5)); // []
