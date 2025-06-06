function mostFrequentNumber(arr) {
    const frequency = {};
    let maxCount = 0;
    let mostFrequent = null;

    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

console.log(mostFrequentNumber([1, 3, 2, 3, 4, 3, 2, 2, 2])); // 2
console.log(mostFrequentNumber([10, 20, 20, 10, 10])); // 10