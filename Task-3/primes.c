#include "stdio.h"
#include "stdlib.h"
int *find_primes(int n)
{
    if(n<2){
        return NULL;
    }
    int arr[n - 1];
    for (int i = 0; i < (n - 1); i++)
        arr[i] = 1;
    int p = 2;
    while ((p * p) <= n)
    {
        if (arr[p - 2] == 1)
        {
            for (int i = p * p; i <= n; i = i + p)
            {
                arr[i - 2] = 0;
            }
        }
        p++;
    }
    int top=0;
    int *res = (int *)malloc((n/2) * 4);
    for (int j = 2; j <= n; j++)
    {
        if (arr[j - 2] == 1)
        {
            *(res + top) = j;
            top++;
        }
        
    }
    return res;
}
int main()
{
    int *arr;
    arr = find_primes(100);
    for (int i = 0;*(arr+i)!=0 ; i++)
    {
        printf("%d, ",*(arr+i));
    }

    free(arr);
    return 0;
}