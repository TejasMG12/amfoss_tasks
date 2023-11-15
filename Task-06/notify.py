from bs4 import BeautifulSoup
import requests
import json
from datetime import datetime, timedelta ,timezone
live_url = "https://www.espncricinfo.com/live-cricket-score"

def getData():
    response = requests.get(live_url)
    if response.status_code == 200:
        html = response.text
    else:
        return -1
    soup = BeautifulSoup(html, 'html.parser')
    data = soup.find(class_="ds-flex ds-flex-wrap")
    data = data.find_all(recursive=False)
    res = []
    for i in data:

        Dict = (json.loads(i.find('script').get_text()))
        Arr = [j.get_text()for j in (i.find_all('span'))]

        if Arr[1].lower() not in ('live', 'abandoned', 'tea', 'lunch', 'innings break','result','drinks','innings break - updates only','drinks'):
            time_difference = datetime.fromisoformat(Dict['startDate']) - datetime.now(timezone.utc)
            seconds_remaining = time_difference.total_seconds()
            res.append([seconds_remaining , f"{Arr[3]}\n{Dict['name']}"])
    for i in range(len(res)-1):
        for j in range(i+1,len(res)):
            if res[i][0]>res[j][0]:
                res[i],res[j]=res[j],res[i]
                
    return res

