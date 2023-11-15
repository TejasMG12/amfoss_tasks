t = int(input())

if t>=1 and t<=10:
    
    for i in range(t):
        n=int(input())
        factor = 2
        while factor * factor <= n:
            if n % factor == 0:
                n //= factor
            else:
                factor += 1
        print(n)