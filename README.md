## What is this?

It's a site with all the perks, spells, and enemies in Noita that has the same layout as the in-game progress page.

It helps you find the stuff to unlock for 100% progress achievements. You can also click the icons to go to the
corresponding wiki page - so it can act as a quick cheatsheet for finding a wiki page.

### How to set up a dev environment

It's pretty simple! You have to make sure you have `python3` installed, and then install the requirements
with `pip3 install -r requirements.txt`.

### How to update Wiki links

All the links are generated based on translations scraped from the game files - `common.csv`.

The actual code (and the template URLs) can be found
in [scraper/perks.py](scraper/perks.py), [scraper/spells.py](scraper/spells.py),
and [scraper/enemies.py](scraper/enemies.py).

After changing the code, re-generate the icons data with `python3 scraper/generate_icons_json.py`

### What to do when a new version of the game is released

The scraper needs two things to generate all the icons:

* the extracted contents of `data.wak` - a `data/` directory
* the `common.csv` file

It's expecting them both in the root directory, right next to this `README.md` file.

After that, re-generate the icons data with `python3 scraper/generate_icons_json.py`