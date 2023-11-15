s=input().strip().lower()
ind = 0
for i in range(len(s)):
    if s[i]==("hello")[ind]:
        ind+=1
    if(ind==5):
        break
if(ind<5):
    print("NO")
else:
    print("YES")