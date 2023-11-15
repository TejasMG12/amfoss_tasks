function find_primes(n) {
    const arr = new Array(n - 1).fill(true);


    for (let p = 2; p * p <= n; p++) {
        if (arr[p - 2]) {
            for (let i = p * p; i <= n; i += p) {
                arr[i - 2] = false;
            }
        }
    }

    var primes = [];
    for (let i = 2; i <= n; i++) {
        if (arr[i - 2]) {
            primes.push(i);
        }
    }

    return primes;
}

var num = 100;
var primeNumbers = find_primes(num);
console.log(`prime numbers less than ${num} are: ${ primeNumbers.join(', ') }`);
