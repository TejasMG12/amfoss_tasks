#include "stdio.h"
int main()
{
    int n;
    scanf("%d", &n);
    int inp[n][3], sum;
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            scanf("%d", &inp[i][j]);
        }
    }
    
    for (int i = 0; i < 3; i++)
    {
        sum = 0;
        for (int j = 0; j < n; j++)
        {
            sum += inp[j][i];
        }
        if(sum!=0){
            printf("NO");
            return 0;
        }
    }
    printf("YES");
    return 0;
}
