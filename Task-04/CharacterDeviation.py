t = int(input())
for i in range(t):
    s = input()
    cnt =0
    for j in range(6):
        if s[j]!= ("amfoss")[j]:
            cnt+=1
    print(cnt)