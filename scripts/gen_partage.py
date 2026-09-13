"""
Génère public/partage.png — l'image affichée quand un lien du site est partagé
sur WhatsApp, Facebook ou LinkedIn. Format imposé par ces plateformes : 1200x630.

Relancer après tout changement de baseline :
    python3 scripts/gen_partage.py
"""

import math
from pathlib import Path

from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

RACINE = Path(__file__).resolve().parent.parent
POLICES = RACINE / "node_modules/@fontsource/poppins/files"
CACHE = RACINE / "scripts/.polices"
SORTIE = RACINE / "public/partage.png"

LARGEUR, HAUTEUR = 1200, 630
VIOLET = (91, 44, 141)
MAGENTA = (230, 0, 126)


def charger(graisse: str, taille: int) -> ImageFont.FreeTypeFont:
    """Convertit le woff2 de Poppins en TTF (une seule fois) puis le charge."""
    CACHE.mkdir(exist_ok=True)
    ttf = CACHE / f"poppins-{graisse}.ttf"
    if not ttf.exists():
        source = TTFont(POLICES / f"poppins-latin-{graisse}-normal.woff2")
        source.flavor = None
        source.save(ttf)
    return ImageFont.truetype(str(ttf), taille)


def degrade(largeur: int, hauteur: int) -> Image.Image:
    """Dégradé diagonal violet -> magenta, dessiné ligne par ligne."""
    base = Image.new("RGB", (largeur, hauteur))
    pixels = base.load()
    for y in range(hauteur):
        for x in range(0, largeur, 4):
            t = (x / largeur * 0.65) + (y / hauteur * 0.35)
            couleur = tuple(
                round(VIOLET[i] + (MAGENTA[i] - VIOLET[i]) * t) for i in range(3)
            )
            for dx in range(4):
                if x + dx < largeur:
                    pixels[x + dx, y] = couleur
    return base


def main() -> None:
    image = degrade(LARGEUR, HAUTEUR)
    dessin = ImageDraw.Draw(image, "RGBA")

    # Vague blanche en pied de visuel, écho des supports imprimés.
    vague = [(0, HAUTEUR)]
    for x in range(0, LARGEUR + 1, 10):
        y = HAUTEUR - 62 - 30 * math.sin(x / LARGEUR * math.pi * 2)
        vague.append((x, y))
    vague.append((LARGEUR, HAUTEUR))
    dessin.polygon(vague, fill=(255, 255, 255, 255))

    sigle = charger("800", 190)
    titre = charger("800", 76)
    corps = charger("400", 36)
    petit = charger("600", 28)

    dessin.text((90, 96), "UP", font=sigle, fill="white")
    dessin.text((92, 306), "Univers des", font=titre, fill="white")
    dessin.text((92, 392), "Possibilités", font=titre, fill="white")
    dessin.text((96, 484), "Votre avenir, notre accompagnement", font=corps, fill="white")
    dessin.text((96, 566), "Believe in light", font=petit, fill=MAGENTA)

    SORTIE.parent.mkdir(parents=True, exist_ok=True)
    image.save(SORTIE, optimize=True)
    print(f"Écrit : {SORTIE} ({SORTIE.stat().st_size // 1024} Ko)")


if __name__ == "__main__":
    main()
