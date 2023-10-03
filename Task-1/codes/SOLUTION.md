

<h1 align="center">TerminalWizard</h1>


  

## : Script ##

Part 0
```bash
$ git clone https://github.com/KshitijThareja/TerminalWizard.git
$ mkdir -p amfoss_tasks/Task-1/codes

```
<br>

Part 1
```bash
$ cat TerminalWizard/06/Spell_05.txt
$ python3 TerminalWizard/spellbook/Impedimenta.py
#copy the spell
$ cat > amfoss_tasks/Task-1/codes/Part_1.txt
aHR0cHM6Ly9naX
$ cp TerminalWizard/spellbook/Impedimenta.py amfoss_tasks/Task-1/codes
$ cd amfoss_tasks
$ git add .
$ git commit -m "task1.1"
$ git push origin  main
$ cd ..
```

<br>
Part 2

At first I did this part wrong, by taking silicon as the element
```bash
$ cat TerminalWizard/04/Spell_01.txt
$ python3 TerminalWizard/spellbook/Diffindo.py
#copy the spell
$ cat > amfoss_tasks/Task-1/codes/Part_2.txt
aXNzdWVwYXNzLg
$ cp TerminalWizard/spellbook/Diffindo.py amfoss_tasks/Task-1/codes
$ cd amfoss_tasks
$ git add .
$ git commit -m "task1.2"
$ git push origin  main
$ cd ..
```
<br>
Part 3

```bash
$ cd TerminalWizard
$ git branch -a
$ git checkout defenseAgainstTheDarkArts
$ python3 spellbook/Riddikulus.py
  #copy the spell
$ git checkout main
$ cd ..
$ cat > amfoss_tasks/Task-1/codes/Part_3.txt
Uh1bnRzbWFuNC9U
$ cp TerminalWizard/spellbook/Riddikulus.py amfoss_tasks/Task-1/codes
$ cd amfoss_tasks
$ git add .
$ git commit -m "task1.3"
$ git push origin  main
$ cd ..
```
<br>
Fixing Part 2

```bash
$ cat TerminalWizard/02/Spell_03.txt
$ python3 TerminalWizard/spellbook/Stupefy.py
#copy the spell
$ cat > amfoss_tasks/Task-1/codes/Part_2.txt
RodWIuY29tL1RoZ
$ cp TerminalWizard/spellbook/Stupefy.py amfoss_tasks/Task-1/codes
$ rm amfoss_tasks/Task-1/codes/Diffindo.py
$ cd amfoss_tasks
$ git add .
$ git commit -m "task1.4"
$ git push origin  main
$ cd ..
```
<br>
Part 4

```bash
$ cd TerminalWizard
$ git log
$ cat TerminalWizard/07/Spell_04.txt
$ python3 TerminalWizard/spellbook/Priori\ Incantatem.py
#Got a error: file doesn't exist
$ git checkout thegraveyard
$ python3 TerminalWizard/spellbook/Priori\ Incantatem.py
#copy the spell
$ git checkout main
$ cd ..
$ cat > amfoss_tasks/Task-1/codes/Part_4.txt
aGVGaW5hbFNwZWxs
$ cp TerminalWizard/spellbook/Priori\ Incantatem.py amfoss_tasks/Task-1/codes
$ cd amfoss_tasks
$ git add .
$ git commit -m "task1.4"
$ git push origin  main
$ cd ..
```

<br>
Final part

```bash
$ cd amfoss_tasks/Task-1/codes
$ cat Part_1.txt Part_2.txt Part_3.txt Part_4.txt > final.txt
$ cat final.txt |base64 --decode
$ rm Part_1.txt Part_2.txt Part_3.txt Part_4.txt
$ geddit SOLUTION.md
$ cd ../..
$ git add .
$ git commit -m "task1.5"
$ git push origin  main
```
![Alt text](https://github.com/TejasMG12/amfoss_tasks/blob/main/Task-1/codes/Screenshot%20from%202023-10-03%2000-07-18.png?raw=true)