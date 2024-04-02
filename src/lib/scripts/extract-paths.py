import os
from xml.dom import minidom
import json

num_files = 6


def extractPaths(directory):
    paths = {}
    colors = set()

    for i in range(1, num_files+1):
        filename = f"wave-{i}.svg"
        file_path = os.path.join(directory, filename)
        doc = minidom.parse(file_path)
        path_elements = doc.getElementsByTagName("path")

        for path in path_elements:
            d = path.getAttribute("d")
            fill = path.getAttribute("fill")
            colors.add(fill)

            if fill not in paths:
                paths[fill] = []

            paths[fill].append(d)

        doc.unlink()

    return paths, list(colors)


def saveToJSON(paths, colors, output_file):
    data = {
        "paths": paths,
        "colors": colors
    }

    with open(output_file, "w") as file:
        json.dump(data, file, indent=2)


# Usage
directory = "../assets"
output_file = "../assets/wave-data.json"

paths, colors = extractPaths(directory)
saveToJSON(paths, colors, output_file)
