import csv

with open('common.csv', encoding="utf8") as f:
    reader = csv.reader(f)

    translation_map = {
        f"{row[0]}": row[1]
        for row in reader
    }


def translate(key, default=""):
    key = key.replace("$", "")
    return translation_map.get(key, default)
