function isAnagram(str1, str2) {
    return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");
}

// Testes
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("race", "care")); // true
