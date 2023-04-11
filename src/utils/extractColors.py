from xml.dom import minidom

doc = minidom.parse("./src/assets/header-diagonal-1.svg")
colors = [path.getAttribute("fill") for path in doc.getElementsByTagName("path")]
doc.unlink()

print(colors)
