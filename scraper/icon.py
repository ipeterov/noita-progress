import os
import shutil

from dataclasses import dataclass, asdict


@dataclass
class Icon:
    id: str
    image_path: str
    name: str = None
    description: str = None
    background_path: str = None

    def yank_image(self, attr):
        """
        Yanks the image from data directory and puts it into src/images

        We need this since data directory is in .gitignore
        """

        new_path = getattr(self, attr).replace('data', 'src/dynamic_images')
        os.makedirs(os.path.dirname(new_path), exist_ok=True)
        shutil.copy(getattr(self, attr), new_path)
        setattr(self, attr, new_path.replace("src/", ""))

    def __post_init__(self):
        self.yank_image("image_path")
        if self.background_path:
            self.yank_image("background_path")

    def to_dict(self):
        return asdict(self)
