from datetime import datetime
import pytz
from bs4 import BeautifulSoup
import requests
import json
import csv
import re
live_url = "https://www.espncricinfo.com/live-cricket-score"
upcoming_url = "https://www.espncricinfo.com/live-cricket-match-schedule-fixtures"
result_url = "https://www.espncricinfo.com/live-cricket-match-results"


def live_update(status):
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

        if ("result" == status and Arr[1].lower() not in ('result')):
            continue
        if ("live" == status and Arr[1].lower() not in ('live', 'abandoned', 'tea', 'lunch', 'innings break')):
            continue
        temp = i.find_all('strong')

        if (len(temp) == 1):
            Arr.append(temp[0].get_text())
            Arr.append("--")
        elif (len(temp) == 2):
            Arr.append(temp[0].get_text())
            Arr.append(temp[1].get_text())
        else:
            Arr.append("--")
            Arr.append("--")

        x = f'''**{Arr[3]}
{Dict['name']}
{Arr[-2].replace('&','')}     /   {Arr[4].replace('&','')} {Arr[-1]}
{Dict['description']}**
[Visit ESPN for more updates]({Dict['url']})'''
        res.append(x)
    return res if len(res) > 0 else ["**No live matches going on**"]


def up_coming():
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
        if (Arr[1].lower() in ('live', 'abandoned', 'result', 'tea', 'lunch', 'innings break', 'drinks', 'innings break - updates only')):
            continue
        if Arr[0][:5] == "Today":
            Arr[0] = pytz.timezone('UTC').localize(datetime.strptime(Arr[0], 'Today, %I:%M %p')).astimezone(
                pytz.timezone('Asia/Kolkata')).strftime('Today %I:%M %p')

        x = f'''**{Arr[3]}
{Dict['name']}
{Arr[0]}
{Arr[4]}**
[Visit ESPN for more updates]({Dict['url']})
        '''
        res.append(x)
    return res if len(res) > 0 else ["**No Up coming matches found**"]


def scorecard():
    response = requests.get(live_url)
    if response.status_code == 200:
        html = response.text
    soup = BeautifulSoup(html, 'html.parser')
    data = soup.find(class_="ds-flex ds-flex-wrap")
    data = data.find_all(recursive=False)
    output = []
    for i in data:
        d = (json.loads(i.find('script').get_text()))
        response = requests.get(d['url'])
        if response.status_code == 200:
            html = response.text
        else:
            return "No live scorecard available :pleading_face"
        soup = BeautifulSoup(html, 'html.parser').find('table')
        t_head = soup.find_all('thead')
        t_body = soup.find_all('tbody')
        if (len(t_head) == 0):
            continue
        batter = [i.get_text() for i in t_head[0].find_all('th')]
        batters = t_body[0].find_all('td')
        temp = len(batter)
        for i in range(len(batters)):
                if i % temp == 0:
                    batters[i] = batters[i].find('span').get_text().split("*")[0]
                    if (len(batters[i]) > 14):
                        batters[i] = batters[i][:15]
                else:
                    batters[i] =  batters[i].get_text()

        
        bat_data = []

        for i in range(len(batters)//len(batter)):
            bat_data.append(batters[i*len(batter):(i+1)*len(batter)])
        res = ''
        for row in [batter] + bat_data:
            formatted_row = " |".join(str(value).ljust(
                width) for value, width in zip(row, [16, 3, 3, 3, 3, 6, 11, 10]))
            res += formatted_row + "\n"
        if len(t_head)<=1:
            continue
        ball = [i.get_text() for i in t_head[1].find_all('th')]
        balls = t_body[1].find_all('td')
        for i in range(len(balls)):
            balls[i] = balls[i].get_text()
            if i % len(ball) == 0:
                balls[i] = str(balls[i]).split("(")[0][:-1]
                if (len(balls[i]) > 14):
                    balls[i] = balls[i][:14]
        ball_data = []
        for i in range(len(balls)//len(ball)):
            ball_data.append(balls[i*len(ball):(i+1)*len(ball)])
        res2 = ''
        for row in [ball] + ball_data:
            formatted_row = " |".join(str(value).ljust(
                width) for value, width in zip(row, [16, 3, 3, 3, 3, 5, 2, 2, 10]))
            res2 += formatted_row + "\n"
        output.append(d['name']+"```js\n`Scores:\n"+res+"\n"+res2+"```"+"\n")

    return output

def generate():
    response = requests.get(live_url)
    if response.status_code == 200:
        html = response.text
    else:
        return -1
    soup = BeautifulSoup(html, 'html.parser')
    data = soup.find(class_="ds-flex ds-flex-wrap")
    data = data.find_all(recursive=False)

    with open("csvfiles/live.csv", 'w', newline='') as file:

        for i in data:

            Dict = (json.loads(i.find('script').get_text()))
            Arr = [j.get_text()for j in (i.find_all('span'))]

            if (Arr[1].lower() not in ('live', 'tea', 'lunch', 'stumps', 'stump', 'result', 'drinks', 'innings break')):
                continue
            temp = i.find_all('strong')

            if (len(temp) == 1):
                Arr.append(temp[0].get_text())
                Arr.append("--")
            elif (len(temp) == 2):
                Arr.append(temp[0].get_text())
                Arr.append(temp[1].get_text())
            else:
                Arr.append("--")
                Arr.append("--")

            write = csv.writer(file)
            write.writerow([" Series ", " Team 1 ", "  vs  ", " Team 2 "])
            teams = (Dict['name']).split('vs')
            temp = re.search(r'\d', teams[1])
            if temp != -1 and temp != None:
                teams[1] = teams[1][:temp.start()]
            temp = teams[1].lower().find('group')
            if temp != -1:
                teams[1] = teams[1][:temp]

            write.writerow([Arr[3], teams[0], "   / ", teams[1]])

            write.writerow(
                [Dict['description'], f"{Arr[-2].replace('&','')}", "   / ", f"{Arr[4].replace('&','')} {Arr[-1]}"])

            write.writerow(" ")
            score = requests.get(Dict['url'])
            if score.status_code == 200:
                html = score.text
            else:
                continue
            soup = BeautifulSoup(html, 'html.parser').find('table')
            t_head = soup.find_all('thead')
            t_body = soup.find_all('tbody')
            if (len(t_head) == 0):
                continue
            batter = [i.get_text() for i in t_head[0].find_all('th')]
            batters = t_body[0].find_all('td')

            temp = len(batter)
            for i in range(len(batters)):
                if i % temp == 0:
                    batters[i] = batters[i].find('span').get_text().split("*")[0]
                else:
                    batters[i] = ":" + batters[i].get_text()

            write.writerow(batter)
            for i in range(len(batters)//temp):
                write.writerow(batters[i*temp:(i+1)*temp])

            write.writerow(" ")
            if (len(t_head) <= 1):
                continue
            ball = [i.get_text() for i in t_head[1].find_all('th')]
            balls = t_body[1].find_all('td')
            temp = len(ball)
            for i in range(len(balls)):
                balls[i] = balls[i].get_text()
                if i % temp == 0:
                    balls[i] = str(balls[i]).split("(")[0][:-1]
                else:
                    balls[i]= ":"+balls[i]
            write.writerow(ball[:-1])
            for i in range(len(balls)//temp):
                write.writerow(balls[i*temp:((i+1)*temp - 1)])
            write.writerow(" ")
        file.close()
        return "csvfiles/live.csv"


def get_response(message: str) -> str:
    req = message.strip().lower()
    if req.find('live') != -1:
        return live_update("live")
    elif req.find('result') != -1:
        return live_update("result")
    elif req.find('scorecard') != -1:
        return scorecard()
    elif req.find("upcoming") != -1 or req.find("next") != -1:
        return up_coming()
    elif req.find("help") != -1:
        return ['''
### Hello there 😄!!
### I am Cricky, and I can update You with latest cricket scores🤔🏏
```js
`Use these Commands for- 
/live update: To get live scores of the ongoing match
/scorecard  : To get scorecard of latest match
/generate   : To get a csv file with all updates
/result     : To get results of preveous matches
/upcoming   : to get info of upcoming matches
/notify     : To get notifications of upcoming matches
*start a command with '!' to get reply in your dm```''']
    else:
        return []
