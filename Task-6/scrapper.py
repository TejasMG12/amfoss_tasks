from datetime import datetime
import pytz
from bs4 import BeautifulSoup
import requests
import json
import csv

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

        if ( "result"== status and Arr[0].lower() not in ('result') ):
            continue
        if ( "live"== status and Arr[0].lower() not in ('live', 'abandoned', 'tea', 'lunch','innings break') ):
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

        x = f'''{Arr[3]}
{Dict['name']}
{Arr[-2].replace('&','')}     /   {Arr[4].replace('&','')} {Arr[-1]}
{Dict['description']}
[Visit ESPN for more updates]({Dict['url']})
        '''
        res.append(x)
    return res if len(res) > 0 else ["No live matches going on"]


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
        if (Arr[0].lower() in ('live', 'abandoned', 'result', 'tea', 'lunch','innings break')):
            continue
        if Arr[0][:5] == "Today":
            Arr[0] = pytz.timezone('UTC').localize(datetime.strptime(Arr[0], 'Today, %I:%M %p')).astimezone(
                pytz.timezone('Asia/Kolkata')).strftime('Today %I:%M %p')
       
        x = f'''{Arr[3]}
{Dict['name']}
{Arr[0]}
{Arr[4]}
[Visit ESPN for more updates]({Dict['url']})
        '''
        res.append(x)
    return res if len(res) > 0 else ["No Up coming matches found"]


up_coming()


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

        batters[0] = batters[0].find('span').get_text().split("*")[0]
        batters[1] = batters[1].find('strong').get_text()
        for i in range(2, len(batters)):
            batters[i] = batters[i].get_text()
            if i % len(batter) == 0:
                batters[i] = str(batters[i]).split("(")[0][:-1]
                if (len(batters[i]) > 14):
                    batters[i] = batters[i][:15]
        bat_data = []

        for i in range(len(batters)//len(batter)):
            bat_data.append(batters[i*len(batter):(i+1)*len(batter)])
        res = ''
        for row in [batter] + bat_data:
            formatted_row = " | ".join(str(value).ljust(
                width) for value, width in zip(row, [15, 2, 2, 2, 2, 6, 11, 10]))
            res += formatted_row + "\n"

        ball = [i.get_text() for i in t_head[1].find_all('th')]
        balls = t_body[1].find_all('td')
        for i in range(len(balls)):
            balls[i] = balls[i].get_text()
            if i % len(ball) == 0:
                balls[i] = str(balls[i]).split("(")[0][:-1]
                if (len(balls[i]) > 14):
                    balls[i] = balls[i][:15]
        ball_data = []
        for i in range(len(balls)//len(ball)):
            ball_data.append(balls[i*len(ball):(i+1)*len(ball)])
        res2 = ''
        for row in [ball] + ball_data:
            formatted_row = " | ".join(str(value).ljust(
                width) for value, width in zip(row, [15, 2, 2, 2, 2, 4, 2, 2, 10]))
            res2 += formatted_row + "\n"
        output.append(d['name']+"```"+res+"\n"+res2+"```"+"\n")

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

            if (Arr[0].lower() not in ('live', 'tea', 'lunch', 'stumps', 'stump', 'result')):
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
            write.writerow(["Series:", Arr[3]])
            write.writerow(["Match:"] + Dict['name'].split("vs"))
            write.writerow(["Score", f"{Arr[-2].replace('&','')}",
                           f"{Arr[4].replace('&','')} {Arr[-1]}"])

            write.writerow(["Description", Dict['description']])
            score = requests.get(Dict['url'])
            if score.status_code == 200:
                html = score.text

            soup = BeautifulSoup(html, 'html.parser').find('table')
            t_head = soup.find_all('thead')
            t_body = soup.find_all('tbody')
            if (len(t_head) == 0):
                continue
            batter = [i.get_text() for i in t_head[0].find_all('th')]
            batters = t_body[0].find_all('td')
            batters[0] = batters[0].find('span').get_text().split("*")[0]
            batters[1] = batters[1].find('strong').get_text()
            for i in range(2, len(batters)):
                batters[i] = batters[i].get_text()
            write.writerow(batter)
            for i in range(len(batters)//len(batter)):
                write.writerow(batters[i*len(batter):(i+1)*len(batter)])

            write.writerow(" ")

            ball = [i.get_text() for i in t_head[1].find_all('th')]
            balls = t_body[1].find_all('td')
            for i in range(len(balls)):
                balls[i] = balls[i].get_text()
                if i % len(ball) == 0:
                    balls[i] = str(balls[i]).split("(")[0][:-1]
            write.writerow(ball)
            for i in range(len(balls)//len(ball)):
                write.writerow(balls[i*len(ball):(i+1)*len(ball)])
            write.writerow(" ")
        file.close()
        return "csvfiles/live.csv"


def get_response(message: str) -> str:
    req = message.strip().lower()
    if req in ("live update", "live updates", "liveupdate"):
        return live_update("live")
    elif req in ("result", "results"):
        return live_update("result")
    elif req in ("scorecard", "scorecards", "scores", "score"):
        return scorecard()
    elif req in ("upcoming", "upcomings", "next"):
        return up_coming()
    elif req in ("help!", "!help", "help"):
        return ['''```
/live update : To get live scores of the ongoing match
/scorecard : To get scorecard of latest match
/generate : To get a csv file with all updates
/result : To get results of preveous matches
/upcoming: to get info of upcoming matches

*start a command with '!' to get reply in your dm```''']
