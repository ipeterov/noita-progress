import json

from scraper.enemies import get_enemies
from scraper.perks import get_perks
from scraper.spells import get_spells

if __name__ == "__main__":
    icons = {
        "enemies": [enemy.to_dict() for enemy in get_enemies()],
        "perks": [perk.to_dict() for perk in get_perks()],
        "spells": [spell.to_dict() for spell in get_spells()],
    }
    with open("src/icons.json", "w") as f:
        json.dump(icons, f, indent=4)
