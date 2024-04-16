from translation import translate
from icon import Icon


def get_enemy(id_):
    name = translate(f"animal_{id_}")
    url = None

    if id_ == "miner_chef":
        name = "Kokkihiisi"
    elif id_ == "basebot_sentry":
        name = "Tarkkailija"
    elif id_ == "basebot_hidden":
        name = "Vakoilija"
    elif id_ == "basebot_neutralizer":
        name = "Pysäyttäjä"
    elif id_ == "basebot_soldier":
        name = "Teloittaja"

    if name:
        url = f"https://noita.wiki.gg/wiki/{name}"
    return Icon(
        id=id_,
        name=name,
        image_path=f"data/ui_gfx/animal_icons/{id_}.png",
        wiki_url=url,
    )


def get_enemies():
    with open("data/ui_gfx/animal_icons/_list.txt") as f:
        ids = f.read().split()

    return [get_enemy(id_) for id_ in ids]
