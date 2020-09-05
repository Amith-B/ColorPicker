function getElementPosition(obj) {
  var curleft = 0,
    curtop = 0;
  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while ((obj = obj.offsetParent));
    return { x: curleft, y: curtop };
  }
  return undefined;
}

export default function getEventLocation(event) {
  var pos = getElementPosition(event.target);

  return {
    x: event.pageX - pos.x,
    y: event.pageY - pos.y,
  };
}
