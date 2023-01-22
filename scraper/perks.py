from translation import translate
from icon import Icon

from luaparser import ast


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
            prop.key.id: prop.value
            for prop in perk_ast.value.fields
        }

        name = translate(perk["ui_name"].s)
        slugified = (
            name
            .replace(' (One-off)', '')
            .title()
            .replace('To ', 'to ')
            .replace('In ', 'in ')
            .replace('On ', 'on ')
            .replace('With ', 'with ')
            .replace('The ', 'the ')
            .replace(' ', '_')
            .replace('-', '_')
        )
        print(slugified)
        url = f"https://noita.wiki.gg/wiki/{slugified}"
        icons.append(
            Icon(
                id=perk["id"].s,
                name=name,
                description=translate(perk["ui_description"].s),
                image_path=perk["perk_icon"].s,
                wiki_url=url,
            )
        )

    return icons
