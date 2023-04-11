import numpy as np
from xml.dom import minidom

# (?<=d=)".*"(?= )

frames = []
for i in range(1, 6):
    doc = minidom.parse(f"./src/assets/header-diagonal-{i}.svg")  # parseString also exists
    path_strings = [path.getAttribute("d") for path in doc.getElementsByTagName("path")]
    doc.unlink()
    frames.append(path_strings)


frames_oriented = np.array(frames).T.tolist()

print("export const wavePaths = {")
print("headerDiagonal : {")
for idx, l in enumerate(frames_oriented):
    print(f"layer{idx+1} : {l},")
print("},")
print("}")
