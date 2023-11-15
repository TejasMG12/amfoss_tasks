#include "stdio.h"
int main()
{
    int n;
    scanf("%d", &n);

    for (int i = 0; i < n; i++)
    {
        int x;
        scanf("%d", &x);
        int arr[x];
        for (int j = 0; j < x; j++)
        {
            scanf("%d", &arr[j]);
        }

        int s1, s2, max = 0, flag;
        for (int j = 0; j < x; j++)
        {
            s1 = 0;
            s2 = 0;
            while (1)
            {
                flag = 0;
                for (int k = 0; k < j; k++)
                {
                    if (arr[k] == s1){
                        s1++;
                        flag=1;
                        break;
                    }
                }
                if(flag==0){
                    break;
                }
            }
            while (1)
            {
                flag = 0;
                for (int k = j; k < x; k++)
                {
                    if (arr[k] == s2){
                        s2++;
                        flag=1;
                        break;
                    }
                }
                if(flag==0){
                    break;
                }
            }

            
            if (max < s1 + s2)
                max = s1 + s2;
        }
        printf("%d\n", max);
    }
}
