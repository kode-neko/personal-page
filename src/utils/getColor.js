import { tagColor } from "../globals";

function getColor(index) {
  let colorIndex = index;
  while (colorIndex > tagColor.length - 1) {
    colorIndex = colorIndex - tagColor.length;
  }
  return colorIndex;
}

export default getColor;
