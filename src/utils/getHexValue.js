import * as pixel from "../config/pixelDirection";
import { rgbToHex } from "./colorConversion";

export default function getHexValue(eventLocation, context, pixelPosition) {
  let x = 0,
    y = 0;
  switch (pixelPosition) {
    case pixel.TOP:
      x = eventLocation.x;
      y = eventLocation.y - 1;
      break;
    case pixel.LEFT:
      x = eventLocation.x - 1;
      y = eventLocation.y;
      break;
    case pixel.CENTER:
      x = eventLocation.x;
      y = eventLocation.y;
      break;
    case pixel.RIGHT:
      x = eventLocation.x + 1;
      y = eventLocation.y;
      break;
    case pixel.BOTTOM:
      x = eventLocation.x + 1;
      y = eventLocation.y + 1;
      break;
    case pixel.TOPLEFT:
      x = eventLocation.x - 1;
      y = eventLocation.y - 1;
      break;
    case pixel.TOPRIGHT:
      x = eventLocation.x + 1;
      y = eventLocation.y - 1;
      break;
    case pixel.BOTTOMLEFT:
      x = eventLocation.x - 1;
      y = eventLocation.y + 1;
      break;
    case pixel.BOTTOMRIGHT:
      x = eventLocation.x + 1;
      y = eventLocation.y + 1;
      break;
    default:
      break;
  }
  let pixelData = context.getImageData(x, y, 1, 1).data;

  let hex =
    "#" +
    ("000000" + rgbToHex(pixelData[0], pixelData[1], pixelData[2])).slice(-6);

  return hex;
}
