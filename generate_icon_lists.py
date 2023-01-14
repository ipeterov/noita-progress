import json
import os
import shutil
from dataclasses import dataclass, asdict

from luaparser import ast


@dataclass
class Icon:
    name: str
    image_path: str

    def __post_init__(self):
        """
        Yanks the image from data directory and puts it into src/images

        We need this since data directory is in .gitignore
        """

        new_path = self.image_path.replace('data', 'src/dynamic_images')
        os.makedirs(os.path.dirname(new_path), exist_ok=True)
        shutil.copy(self.image_path, new_path)
        self.image_path = new_path.replace("src/", "")


def get_spells():
    with open("data/scripts/gun/gun_actions.lua") as f:
        tree = ast.parse(f.read())

    actions = None
    for statement in tree.body.body:
        if statement.display_name != 'Assign':
            continue

        if statement.targets[0].id != "actions":
            continue

        actions = statement
        break

    icons = []
    for spell_ast in actions.values[0].fields:
        spell = {
            prop.key.id: prop.value.s
            for prop in spell_ast.value.fields
            if hasattr(prop.value, 's')
        }
        icons.append(Icon(name=spell["id"], image_path=spell["sprite"]))

    return icons


def get_perks():
    with open("data/scripts/perks/perk_list.lua") as f:
        tree = ast.parse(f.read())

    actions = None
    for statement in tree.body.body:
        if statement.display_name != 'Assign':
            continue

        if statement.targets[0].id != "perk_list":
            continue

        actions = statement
        break

    icons = []
    for perk_ast in actions.values[0].fields:
        perk = {
            prop.key.id: prop.value.s
            for prop in perk_ast.value.fields
            if hasattr(prop.value, 's')
        }
        icons.append(Icon(name=perk["id"], image_path=perk["ui_icon"]))

    return icons


def get_enemies():
    with open("data/ui_gfx/animal_icons/_list.txt") as f:
        names = f.read().split()

    return [
        Icon(name=name, image_path=f"data/ui_gfx/animal_icons/{name}.png")
        for name in names
    ]


if __name__ == "__main__":
    icons = {
        "enemies": [asdict(enemy) for enemy in get_enemies()],
        "perks": [asdict(perk) for perk in get_perks()],
        "spells": [asdict(spell) for spell in get_spells()],
    }
    with open("src/icons.json", "w") as f:
        json.dump(icons, f, indent=4)
