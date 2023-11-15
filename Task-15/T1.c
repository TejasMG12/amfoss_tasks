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
        if (n > 0)
            n = n - 1;
        int j = n / 3;
        int k = n / 5;
        int m = n / 15;
        int l = (j * (3 + j * 3)) / 2;

        n = (k * (5 + k * 5)) / 2;
        int o = (m * (15 + m * 15)) / 2;

        printf("%d\n", l + n - o);
    }
    return 0;
}
