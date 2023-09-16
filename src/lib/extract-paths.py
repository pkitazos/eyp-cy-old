import os
import numpy as np
from xml.dom import minidom

# (?<=d=)".*"(?= )


def toCamelCase(str):
    lst = str.split("-")
    lst = [lst[0]] + [word.capitalize() for word in lst[1:]]
    return "".join(lst)


def extractStuff(directory, filename, num):
    frames = []
    for i in range(1, num+1):
        doc = minidom.parse(f"./{directory}/{filename}-{i}.svg")
        path_strings = [path.getAttribute("d") for path in doc.getElementsByTagName("path")]
        doc.unlink()
        frames.append(path_strings)

    layers = np.array(frames).T.tolist()

    doc = minidom.parse(f"./{directory}/{filename}-1.svg")
    colors = [path.getAttribute("fill") for path in doc.getElementsByTagName("path")]
    doc.unlink()

    paths = {}
    paths[toCamelCase(filename)] = {}
    paths[toCamelCase(filename)]["layers"] = layers
    paths[toCamelCase(filename)]["colors"] = colors
    return paths


print("const paths = ", end="")
print(extractStuff(directory="horizontal-waves",filename="header-horizontal", num=5))
