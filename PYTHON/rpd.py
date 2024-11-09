# Script to create three dictionaires, one for each role
# Each dict{hero_name : R, P, D}
    # each entry will have at least one or at most three comps

########################### Create Empty Dicts ###############################
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