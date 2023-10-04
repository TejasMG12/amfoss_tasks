def find_primes(n):
    arr=[True]*(n-1)
    p=2
    prime=[]
    while p**2<=n:
        if arr[p-2]:
            for i in range(p**2,n+1,p):
                arr[i-2]=False
        p+=1
    for i in range(2,n+1):
        if arr[i-2]:
            prime.append(i)
    return prime

num = int(input("Enter a positive number: "))
print(f"Primes till {num} are{find_primes(num)}")
