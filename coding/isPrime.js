function isPrime(n) {
    if (n < 2) return false; // Números menores que 2 não são primos

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false; // Se for divisível por qualquer número além de 1 e ele mesmo, não é primo
    }

    return true;
}

// Testes
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false
console.log(isPrime(2)); // true
