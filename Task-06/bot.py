import discord
from discord.ext import commands
import os
from dotenv import load_dotenv
import scrapper
import notify
import asyncio
import re
load_dotenv()
token = os.getenv("DISCORD_TOKEN")


async def send_message(message, user_message, isPrivate):
    try:
        response = scrapper.get_response(user_message)
        if (isPrivate):
            for i in response:
                await message.author.send(i)
        else:
            for i in response:
                await message.channel.send(i)
    except Exception as e:
        print(e)


async def send_notification(message, note, isPrivate):
    try:

        if (isPrivate):
            await message.author.send(note)
        else:
            await message.channel.send(note)
    except Exception as e:
        print(e)

async def poll(message, question, options):
    
    poll_message = f"**{question}**\n\n"

    for i, option in enumerate(options):
        poll_message += f"{i + 1}. {option}\n"

    poll_message += "\nReact to vote!"

    poll_embed = discord.Embed(description=poll_message, color=0x3498db)
    poll_message = await message.channel.send(embed=poll_embed)

    for i in range(len(options)):
        await poll_message.add_reaction(f"{i + 1}\N{COMBINING ENCLOSING KEYCAP}")


async def middleware(time, message, note, isPrivate):
    await asyncio.sleep(time)
    await send_notification(message=message, note=note+" starts soon", isPrivate=True)
    
    
    question = note+"\nWho do you think will win"
    options = (note.split('\n')[1]).split('vs')
    temp = re.search(r'\d',options[1])
    if temp!= -1 and temp!=None:
        options[1] = options[1][:temp.start()]
    temp = options[1].lower().find('group')
    if temp!= -1:
        options[1] = options[1][:temp]
    await poll(message,question,options)


async def get_notification(message, isPrivate):

    await send_notification(message=message, note="**Alright I will notify You when match starts**", isPrivate=isPrivate)
    try:
        notes = notify.getData()
        
        for i in range(len(notes)):
            if i ==0:
                t = notes[i][0]
            else:
                t = notes[i][0]- notes[i-1][0]
            await middleware(t, message, notes[i][1], isPrivate)
            
    except Exception as e:
        print(e)



    
def run_bot():
    intents = discord.Intents.default()
    intents.message_content = True
    client = discord.Client(intents=intents)
    bot = commands.Bot(command_prefix='?',intents=intents)
    
    
    @client.event
    async def on_ready():
        print(f'{client.user} has connected to Discord!')
    
    
    @client.event
    async def on_message(message):
        if message.author == client.user:
            return
        username = str(message.author)
        user_message = str(message.content)
        channel = str(message.channel)
        print(f'{username}: {user_message} on {channel}')
        if len(user_message) and user_message[0] == '!':
            user_message = user_message[1:]
            
            if user_message.lower().find('generate') != -1:
                file_name = scrapper.generate()
                with open(file_name, 'rb') as file:
                    await message.author.send(file=discord.File(file, file_name))
            elif user_message.lower().find('notify') != -1 or user_message.lower().find('notificat') != -1:
                await get_notification(message, isPrivate=True)
            else:
                await send_message(message, user_message, isPrivate=True)

        if len(user_message) and  user_message[0] == '/':
            user_message = user_message[1:]
            
            if user_message.lower().find('generate') != -1:
                file_name = scrapper.generate()
                with open(file_name, 'rb') as file:
                    await message.channel.send(file=discord.File(file, file_name))
            elif user_message.lower().find('notify') != -1 or user_message.lower().find('notificat') != -1:
                await get_notification(message, isPrivate=False)
            else:
                await send_message(message, user_message, isPrivate=False)

    client.run(token)


run_bot()
