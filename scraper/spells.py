from translation import translate
from icon import Icon

from luaparser import ast


def get_spells():
    with open("data/scripts/gun/gun_actions.lua") as f:
        tree = ast.parse(f.read())

    backgrounds = {
        "ACTION_TYPE_PROJECTILE": "item_bg_projectile.png",
        "ACTION_TYPE_STATIC_PROJECTILE": "item_bg_static_projectile.png",
        "ACTION_TYPE_MODIFIER": "item_bg_modifier.png",
        "ACTION_TYPE_DRAW_MANY": "item_bg_draw_many.png",
        "ACTION_TYPE_MATERIAL": "item_bg_material.png",
        "ACTION_TYPE_OTHER": "item_bg_other.png",
        "ACTION_TYPE_UTILITY": "item_bg_utility.png",
        "ACTION_TYPE_PASSIVE": "item_bg_passive.png",
    }

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
            prop.key.id: prop.value
            for prop in spell_ast.value.fields
        }
        name = translate(spell["name"].s)
        slugified = (
            name
            .replace(' (One-off)', '')
            .title()
            .replace('Of', 'of')
            .replace(' ', '_')
            .replace('-', '_')
        )
        url = f"https://noita.fandom.com/wiki/{slugified}"
        icons.append(
            Icon(
                id=spell["id"].s,
                name=name,
                description=translate(spell["description"].s),
                image_path=spell["sprite"].s,
                background_path=f"data/ui_gfx/inventory/{backgrounds[spell['type'].id]}",
                wiki_url=url,
            )
        )

    return icons
