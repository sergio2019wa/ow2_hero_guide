# Purpose: To scrape OverBuff's Platform:PC Game Mode: Competitive Stats. More Specifically
# The Highest Pick Rate, and Highest Win Rate for each role. With that scraped information, 
# I want to store the first 3 of each category for each role and display the on my website's
# role picker.

import requests
import os
from bs4 import BeautifulSoup 
from html.parser import HTMLParser

#################################################### Testing ###########################################################

# Check if file exists
# Parameters
    # path: path of url we're checking 
def if_file_empty(path):
    file_size = os.stat(path).st_size
    if file_size == 0:
        return True
    return False

################################################## Not Testing ##########################################################

# Get url contents and print it to xxx.txts 
# Parameters
    # url: Overbuff page with specified role[Damage, Tank, Support]
    # path: location of __output.txt
def html_and_soup(url, path):

    #Gets the url into a package [Unreadable]
    response = requests.get(url, headers = {'User-agent': 'Super Bot Power Level Over 9000'})

    #Getting just the text
    html_data = response.text

    #Pulling data out of HTML
    soup = BeautifulSoup(html_data, "html.parser")

    #w/ soup.get_text() put it in the output.txt file
    with open(path, 'w') as f:
        f.write(soup.get_text())
        

# Grab information of specified chart for requested role
# Parameters 
    # path1 : xxx_output.txt to parse
    # path2 : 
    # heroes : dict of all heores for quick lookup
    # dts_length (int) : skip role substring (6 / 4 / 7)
def grab_info_v1(path1, path2, heroes, dts_length):
    f = open(path1, 'r')
    f_string = f.read()

    HPR_index = f_string.find("HeroPick Rate") + 13
    HWR_index = f_string.find("HeroWin Rate") + 12
    HKR_index = f_string.find("HeroKDA Ratio") + 13
    HPR_dict = helper_v1(f_string, heroes, dts_length, 4, 1, HPR_index)
    HWR_dict = helper_v1(f_string, heroes, dts_length, 5, 1, HWR_index)
    HKR_dict = helper_v1(f_string, heroes, dts_length, 4, 0, HKR_index)

    # write xxx_dict's to path2 and print to console
    f = open(path2, "w")
    f.write("Highest Pick Rate" + str(HPR_dict) + "\n")
    f.write("Highest Win Rate" + str(HWR_dict) + "\n")
    f.write("Highest KDA Ratio" + str(HKR_dict) + "\n")

    print(HPR_dict)
    print(HWR_dict)
    print(HKR_dict)

# Parse f_string for hero inforamtion into a dictionary
# Parameters
    # f_string - xxx.txt
    # heroes - list of heroes
    # int (role string length) - Damage / Tank / Support
    # int (statistic lengh) - 4.48 / 51.07 / 3.71
    # int (offset idx so it starts on the next !int) - 4.48% / 51.07% / 3.71
        #  1 or 0
    # xxx_index - starting index for each statistic
def helper_v1(f_string, heroes, dts_length, stat_length, offset, xxx_index):
    xxx_dict = {}
    for i in range(5): 
        end = xxx_index
        while True:
            if (f_string[xxx_index: end] in heroes):
                break
            end += 1
        hero = f_string[xxx_index: end]
        xxx_index = end + dts_length
        rate = float(f_string[xxx_index: xxx_index + stat_length])
        xxx_dict[hero] = rate
        xxx_index = xxx_index + offset + stat_length
    return xxx_dict

########################################################## Main #########################################################
# URLS:
over_buff_homepage = "https://www.overbuff.com/meta?platform=pc&gameMode=competitive&timeWindow=3months/"
over_buff_damage = "https://www.overbuff.com/meta?platform=pc&gameMode=competitive&role=damage&season=ow2s13"
over_buff_tank = "https://www.overbuff.com/meta?platform=pc&gameMode=competitive&role=tank&season=ow2s13"
over_buff_support = "https://www.overbuff.com/meta?platform=pc&gameMode=competitive&role=support&season=ow2s13"

reddit_base_url = "https://www.reddit.com/r/help/comments/800glp/how_do_you_make_your_text_really_small/?rdt=64542"

# File Paths:

# Raw files from website
damage_path = "./TXT/damage_output.txt"
tank_path = "./TXT/tank_output.txt"
support_path = "./TXT/support_output.txt"

# Cleaned up file info
damage_path2 = "./TXT/damage_output2.txt"
tank_path2 = "./TXT/tank_output2.txt"
support_path2 = "./TXT/support_output2.txt"

#Lists
heroes = ['Ana', 'Ashe', 'Baptiste', 'Bastion', 'Brigitte', 'Cassidy', 'D.Va', 'Doomfist', 
          'Echo', 'Freja','Genji', 'Hanzo', 'Hazard', 'Illari', 'Junker Queen', 'Junkrat', 'Juno', 
          'Kiriko', 'Lifeweaver', 'Lúcio', 'Mauga', 'Mei', 'Mercy', 'Moira', 'Orisa', 
          'Pharah', 'Ramattra', 'Reaper', 'Reinhardt', 'Roadhog', 'Sigma', 'Sojourn', 
          'Soldier: 76', 'Sombra', 'Symmetra', 'Torbjörn', 'Tracer', 'Venture', 'Widowmaker', 
          'Winston', 'Wrecking Ball', 'Zarya', 'Zenyatta']

# Uncomment and delete .txts if you want to refresh data
html_and_soup(over_buff_damage, damage_path)
html_and_soup(over_buff_tank, tank_path)
html_and_soup(over_buff_support, support_path)

grab_info_v1(damage_path, damage_path2, heroes, 6)
grab_info_v1(tank_path, tank_path2, heroes, 4)
grab_info_v1(support_path, support_path2, heroes, 7)