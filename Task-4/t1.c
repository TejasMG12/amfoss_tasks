#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    int n, flag;
    scanf("%d", &n);
    char inp[n][3][3];
    for (int i = 0; i < n; i++)
    {
        for(int j=0;j<3;j++){
            scanf("%s",inp[i][j]);
        }
    }
    for (int i = 0; i < n; i++)
    {
        flag = 0;
        if (inp[i][1][1]!='.' &&((inp[i][0][0] == inp[i][1][1] && inp[i][1][1] == inp[i][2][2]) || (inp[i][0][2] == inp[i][1][1] && inp[i][1][1] == inp[i][2][0])))
        {
            printf("%c\n", inp[i][1][1]);
            continue;
        }
        for (int j = 0; j < 3; j++)
        {
            if (inp[i][1][1]!='.' &&(inp[i][j][0] == inp[i][j][1] && inp[i][j][1] == inp[i][j][2]))
            {
                printf("%c\n", inp[i][j][1]);
                flag = 1;
                break;
            }
        }
        if (flag)
            continue;
        for (int j = 0; j < 3; j++)
        {
            if (inp[i][1][1]!='.' &&(inp[i][0][j] == inp[i][1][j] && inp[i][1][j] == inp[i][2][j]))
            {
                printf("%c\n", inp[i][1][j]);
                flag = 1;
                break;
            }
        }
        if (flag)
            continue;
        printf("DRAW\n");
    }
    printf("\b");
    return 0;
}
