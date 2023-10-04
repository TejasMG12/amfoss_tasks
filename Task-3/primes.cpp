#include <iostream>
#include <vector>

std::vector<int> find_primes(int n)
{
    std::vector<bool> arr(n - 1, true);

    for (int p = 2; p * p <= n; p++)
    {
        if (arr[p - 2])
        {
            for (int i = p * p; i <= n; i += p)
            {
                arr[i - 2] = false;
            }
        }
    }

    std::vector<int> primes;
    for (int i = 2; i <= n; i++)
    {
        if (arr[i - 2])
        {
            primes.push_back(i);
        }
    }

    return primes;
}

int main()
{
    int num;
    printf("Enter a number:");
    scanf("%d", &num);
    std::vector<int> primeNumbers = find_primes(num);
    printf("prime numbers upto %d are:",num);
    for (int prime : primeNumbers)
    {
        printf("%d ",prime);
    }

    return 0;
}
