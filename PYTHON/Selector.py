"""
.txt -> PDF

.txt -> Python Script
    Example of txt: 
        Cassidy //Hero Name
        Cassidy //Hero Name
        Damage  //Hero Role
        4.64%   //Pick Rate
        47.02%  //Win Rate
        2.55    //KDA

        Ashe    //[0]   Put into map (Ashe, 0.0)
        Ashe    //[1]   dictionary will ignore
        Damage  //[2]   ignore
        3.55%   //[3]   ignore
        51.04%  //[4]   map.put(Ashe, 51.04%)
        3.26    //[5]   ignore
        
    - Dictionary
        - Initialize
            dict = {
                "name": "John",
                "age"; 30
            }
        - Add new pair
            dict["city"] = "New York"
"""
import pypdf
from pypdf import PdfReader

# All Heroes Dictionary
    # Store hero

################################################### Damage Heroes ##########################################################

# Store hero names and win rate
def damage_hero_function():
    chart = txt_parser("Assets/images/Text Files/Top Damage Heroes.txt", "DPS")
    return chart


################################################# Support Heroes ############################################################
def support_hero_function():
    chart = txt_parser("Assets/images/Text Files/Top Support Heroes.txt", "Supports")
    return chart


################################################# Tank Heroes ############################################################

def tank_hero_function():
    chart = txt_parser("Assets/images/Text Files/Top Tank Heroes.txt", "Tanks")
    return chart

############################################### .Txt Parse For all Roles ########################################################################
def txt_parser(file_path, role):

    # Convert given txt file to a Dictionary storing {Hero, Win Rate}
    hero_stats = {

    }
    data = open(file_path, "r")
    num = 0
    hold = ""
    while True:
        content=data.readline()
        if not content:
            break
        if num == 6 or num == 0: # -> num = 0
            num = 0
            hold = content
        if num == 3:
            snip = content.replace("%", "")
            # {Hero, Win Rate}
            hero_stats[hold] = snip
        num += 1
    data.close()

    # Choose and print out THREE Heroes w/ the highest win rate(first three heroes)
    output = {

    }
    idx = 3
    print("-------- " + role + " --------")
    for x, y in hero_stats.items():
        if idx == 0:
            break
        output[x] = y
        print(x.strip() + ": " + y.strip() + "%")
        idx -= 1
    #Prints
    print()
    #Return
    return hero_stats
    



    

################################################ Main #############################################################
tank_info = tank_hero_function()
damage_info = damage_hero_function()
support_info = support_hero_function()

# print(tank_info)
# print(damage_info)
# print(support_info)