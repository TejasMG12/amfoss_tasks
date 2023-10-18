#include <stdio.h>
#include <math.h>
int main()
{
    int t;
    scanf("%d", &t);

    for (int a0 = 0; a0 < t; a0++)
    {
        int n;

        scanf("%d", &n);
        if (n < 4)
        {
            printf("0\n");
            return 0;
        }
        if (n <= 5)
        {
            printf("3\n");
            return 0;
        }
        n--;
        int sum, x;
        x = n / 3;
        sum = (x * (6 + (x - 1) * 3)) / 2;
        x = n / 5;

        sum += (x * (10 + (x - 1) * 5)) / 2;
        if (n >= 15)
        {
            x = n / 15;
            sum -= (x * (30 + (x - 1) * 15)) / 2;
        }
        printf("%d\n", sum);
    }
    return 0;
}
