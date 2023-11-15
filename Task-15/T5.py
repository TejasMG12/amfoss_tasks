#!/bin/python3

import sys


t = int(input())
for a in range(t):
    n = int(input())
    ans=1
    for i in range (2,n+1):
        f=[]
        while ans%i!=0:
            for j in range (1,i+1):
                if (ans*j)%i==0 and i%j==0:
                    ans=ans*j
                    break
    print(ans)
           
