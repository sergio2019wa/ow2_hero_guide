# Script to create three dictionaires, one for each role
# Each dict{hero_name : R, P, D}
    # each entry will have at least one or at most three comps

########################### Create Dicts ###############################
def t_initialize():
    tank = {
        "D.VA": "Dive",
        "Doomfist": "Dive",
        "Junker Queen": "Rush",
        "Mauga": ["Rush", "Poke"],
        "Orisa": ["Rush", "Poke", "Dive"],
        "Ramattra": "Rush",
        "Reindhart": "Rush",
        "Roadhog": "Poke",
        "Sigma": "Poke",
        "Winston": "Dive",
        "Wrecking Ball": "Dive",
        "Zarya": "Rush"
    }
    return tank

def d_initialize():
    dps = {
        "Ashe": "Poke",
        "Bastion": "Rush",
        "Cassidy": "Rush",
        "Echo": "Dive",
        "Genji": "Dive",
        "Hanzo": "Poke",
        "Junkrat": ["Rush", "Poke"],
        "Mei": "Rush",
        "Pharah": "Poke",
        "Reaper": "Dive",
        "Soujurn": ["Rush", "Poke", "Dive"],
        "Soldier: 76": ["Rush", "Poke"],
        "Sombra": "Dive",
        "Symmetra": "Rush",
        "Torbjorn": "Poke",
        "Tracer": "Dive",
        "Venture": "Dive",
        "Widowmaker": "Poke"
    }
    return dps

def s_initialize():
    support = {
        "Ana": "Dive",
        "Baptiste": ["Rush", "Poke"],
        "Illari": "Rush",
        "Juno": "Rush",
        "Kiriko": "Dive",
        "Lifeweaver": "Poke",
        "Lucio": "Rush",
        "Mercy": "Poke",
        "Moira": "Rush",
        "Zenyatta": "Poke"
    }
    return support


########################## Main ##############################
# initalize


############################### tank/damage/support_info ###################################

# {'Reinhardt': '3.21%', 
#  'D.Va': '2.99%', 
#  'Zarya': '2.42%', 
#  'Winston': '2.15%', 
#  'Junker Queen': '1.85%', 
#  'Ramattra': '1.57%', 
#  'Orisa': '1.55%', 
#  'Doomfist': '1.52%', 
#  'Sigma': '1.49%', 
#  'Roadhog': '1.16%', 
#  'Wrecking Ball': '0.88%', 
#  'Mauga': '0.78%'}

# {'Cassidy': '4.43%', 
#  'Ashe': '3.61%', 
#  'Soldier: 76': '3.42%', 
#  'Tracer': '2.96%', 
#  'Reaper': '2.85%', 
#  'Genji': '2.78%', 
#  'Junkrat': '2.28%', 
#  'Sombra': '2.22%', 
#  'Widowmaker': '2.15%', 
#  'Hanzo': '1.97%', 
#  'Mei': '1.63%', 
#  'Sojourn': '1.53%', 
#  'Venture': '1.43%', 
#  'Bastion': '1.41%', 
#  'Pharah': '1.38%', 
#  'Echo': '1.26%', 
#  'Torbjörn': '1.16%', 
#  'Symmetra': '0.77%'}

# {'Juno': '7.63%', 
#  'Ana': '7.40%', 
#  'Kiriko': '4.45%', 
#  'Moira': '4.15%', 
#  'Mercy': '3.46%', 
#  'Baptiste': '2.26%', 
#  'Brigitte': '2.24%', 
#  'Lúcio': '2.11%', 
#  'Zenyatta': '1.84%', 
#  'Illari': '1.50%', 
#  'Lifeweaver': '1.36%'}