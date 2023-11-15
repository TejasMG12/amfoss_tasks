fn find_primes(n: usize) -> Vec<usize> {
    let mut arr = vec![true; n -1];
    
    let mut p = 2;
    while p * p <= n {
        if arr[p-2] {
            let mut i = p * p;
            while i <= n {
                arr[i-2] = false;
                i += p;
            }
        }
        p += 1;
    }
    let mut primes = Vec::new();
    for i in 2..=n {
        if arr[i-2] {
            primes.push(i);
        }
    }

    primes
}

fn main() {
    let num = 50; 
    let primes = find_primes(num);

    println!("Prime numbers up to {} are: {:?}", limit, primes);
}
