import discord
from discord.ext import commands, tasks
import os
from dotenv import load_dotenv
import scrapper
load_dotenv()
token = os.getenv("DISCORD_TOKEN")


async def send_message(message, user_message, isPrivate):
    try:
        response = scrapper.get_response(user_message)
        if (isPrivate):
            for i in response :
                await message.author.send(i)  
        else:
            for i in response:
                await message.channel.send(i)
    except Exception as e:
        print(e)


def run_bot():
    intents = discord.Intents.default()
    intents.message_content = True
    client = discord.Client(intents=intents)

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
            if user_message.lower() in ('generate update','generate updates','generate'):
                file_name = scrapper.generate()
                with open(file_name,'rb') as file:
                    await message.author.send(file=discord.File(file,file_name))
            else:
                await send_message(message, user_message, isPrivate=True)
            
        if user_message[0] == '/':
            user_message = user_message[1:]
            if user_message.lower().strip() in ('generate update','generate updates','generate'):
                file_name = scrapper.generate()
                with open(file_name,'rb') as file:
                    await message.channel.send(file=discord.File(file, file_name))
            else:
                await send_message(message, user_message, isPrivate=False)
        
    client.run(token)

run_bot()
