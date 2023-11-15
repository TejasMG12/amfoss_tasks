package main

import (
	"fmt"
)

func find_primes(n int) []int {
	arr := make([]bool, n-1)
	for i := 0; i < n-1; i++ {
		arr[i] = true
	}

	p := 2
	for p*p <= n {
		if arr[p-2] {
			for i := p * p; i <= n; i += p {
				arr[i-2] = false
			}
		}
		p++
	}

	var primes []int
	for i := 2; i <= n; i++ {
		if arr[i-2] {
			primes = append(primes, i)
		}
	}

	return primes
}

func main() {
	num := 50 
	primeNumbers := find_primes(num)

	fmt.Printf("Prime numbers up to %d are: %v\n", num, primeNumbers)
}
