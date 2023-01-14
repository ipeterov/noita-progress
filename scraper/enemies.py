from translation import translate
from icon import Icon


def get_enemies():
    with open("data/ui_gfx/animal_icons/_list.txt") as f:
        names = f.read().split()

    return [
        Icon(
            id=name,
            name=translate(f"animal_{name}"),
            image_path=f"data/ui_gfx/animal_icons/{name}.png",
        )
        for name in names
        if name != "turret_right"
    ]
