t = int(input())
for i in range(t):
    n = int(input())
    arr = list(map(int, input().strip().split()))[:n]
    res = "1"
    if (len(arr) < 2):
        print(res)
        continue
    series = [arr[0], arr[1]]
    res = "11"
    if (arr[1] >= arr[0]):
        flag = 1
    else:
        flag = 0
    # 3 2 1 2 3
    #3 7 7 9 2 4 6 3 4 4 6 8 2
    for j in range(2, n):
        if arr[j]==series[-1] or arr[j]==series[0]:
            series.append(arr[j])
            res+="1"
            continue
        if flag==1 and arr[j]>series[-1]:
            series.append(arr[j])
            res+="1"
            continue
        if arr[j] < series[-1] and flag==1 and arr[j] < series[0]:
            series.append(arr[j])
            res+="1"
            flag=0
            continue
        if arr[j]>series[0] and flag==0:
            res+="0"
            continue
        if flag==0 and arr[j]<series[-1]:
            res+="0"
            continue
        if arr[j]>series[-1] and arr[j]<=series[0]:
            series.append(arr[j])
            res += "1"
            continue
        res+="0"
        
        
    print(res)
