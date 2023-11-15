def largest_palindrome(n):
    ans = 0
    
    for i in range(100, 1000):
        for j in range(i, 1000):
            num = i*j       
            if num < n and (str(num) == str(num)[::-1]) :
                ans = max(ans, num)
    
    return ans

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    print(largest_palindrome(n))
    