import React from "react";
import * as pixel from "../../../config/pixelDirection";

function Pixel({
  colors,
  className,
  currentPixelClicked,
  setCurrentPixelClicked,
}) {
  const directionArray = [
    pixel.TOPLEFT,
    pixel.TOP,
    pixel.TOPRIGHT,
    pixel.LEFT,
    pixel.CENTER,
    pixel.RIGHT,
    pixel.BOTTOMLEFT,
    pixel.BOTTOM,
    pixel.BOTTOMRIGHT,
  ];
  const getPixelDiv = (dir, index) => (
    <div
      className={className}
      key={index}
      onClick={() => {
        setCurrentPixelClicked(dir);
      }}
      style={{
        borderRadius: currentPixelClicked === dir ? "5px" : "15px",
        display: "inline-block",
        width: "30px",
        height: "30px",
        margin: "2px",
        border: currentPixelClicked === dir ? "2px solid black" : "0px",
        backgroundColor: colors[dir],
      }}
    ></div>
  );

  return (
    <div
      className="col m-3"
      style={{
        maxWidth: "110px",
        maxHeight: "110px",
        minWidth: "110px",
        minHeight: "110px",
        borderRadius: "10px",
        border: "2px solid grey",
      }}
    >
      <div className="row">
        {directionArray
          .slice(0, 3)
          .map((dir, index) => getPixelDiv(dir, index))}
      </div>
      <div className="row">
        {directionArray
          .slice(3, 6)
          .map((dir, index) => getPixelDiv(dir, index))}
      </div>
      <div className="row">
        {directionArray.slice(6).map((dir, index) => getPixelDiv(dir, index))}
      </div>
    </div>
  );
}

export default Pixel;
